// Checks for app/index.html in headless Chromium. Needs playwright and a Chromium:
//   NODE_PATH=$(npm root -g) node tests/verify-app.js
// Not wired into CI (that would need a browser install step); run it after editing
// the app. Cases come from a Codex code review on 2026-10-20; each was reproduced
// against the app first.
const path = require('path');
const fs = require('fs');
const { chromium } = require('playwright');

const url = 'file://' + path.resolve(__dirname, '..', 'app', 'index.html');
let failures = 0;
function check(name, ok, extra = '') {
  console.log((ok ? 'PASS' : 'FAIL') + '  ' + name + (ok ? '' : '  ' + extra));
  if (!ok) failures++;
}

async function launch() {
  const dir = process.env.PLAYWRIGHT_BROWSERS_PATH || '/opt/pw-browsers';
  const found = fs.existsSync(dir)
    ? fs.readdirSync(dir).map(e => path.join(dir, e, 'chrome-linux', 'chrome')).filter(p => fs.existsSync(p))
    : [];
  try { return await chromium.launch(); }
  catch (e) { for (const executablePath of found) { try { return await chromium.launch({ executablePath }); } catch (_) {} } throw e; }
}

(async () => {
  const browser = await launch();
  const page = await browser.newPage();
  const errors = [];
  page.on('pageerror', e => errors.push(e.message));
  page.on('dialog', d => d.accept());           // alerts and confirms
  await page.goto(url);

  const stored = () => page.evaluate(() => localStorage.getItem('prompt-gauntlet'));
  const importText = async (text) => {
    await page.setInputFiles('#imp', { name: 's.json', mimeType: 'application/json', buffer: Buffer.from(text) });
    await page.waitForTimeout(200);
  };

  // --- an import that parses but is the wrong shape must not replace saved work
  await page.evaluate(() => { S.title = 'KEEP ME'; save(); render(); });
  await importText('{"sc":null}');
  check('a wrong-shaped import leaves the current work in place',
    await page.evaluate(() => S.title) === 'KEEP ME' && (await stored()).includes('KEEP ME'));
  check('and the app still renders', await page.locator('body').isVisible()
    && await page.evaluate(() => Array.isArray(S.sc)));

  await importText('{"spec":{"objective":5}}');
  check('a wrong-typed field is refused', await page.evaluate(() => S.title) === 'KEEP ME');
  await importText('[1,2]');
  check('a non-object is refused', await page.evaluate(() => S.title) === 'KEEP ME');

  // --- a valid partial import still works, with missing parts filled in
  await importText('{"title":"Imported"}');
  check('a valid partial import is accepted and completed',
    await page.evaluate(() => S.title === 'Imported' && Array.isArray(S.sc) && typeof S.spec.reader === 'string'));

  // --- stored state of the wrong shape: fall back, keep a copy
  await page.evaluate(() => localStorage.setItem('prompt-gauntlet', '{"sc":null}'));
  await page.reload();
  check('unusable stored state falls back to a working blank', await page.evaluate(() => Array.isArray(S.sc)));
  check('and the original is kept aside', await page.evaluate(() =>
    localStorage.getItem('prompt-gauntlet.unreadable')) === '{"sc":null}');

  // --- deleting a criterion must not hand its passing test to the next one
  await page.evaluate(() => localStorage.removeItem('prompt-gauntlet.unreadable'));
  await page.evaluate(() => {
    S = BLANK();
    S.sc = [{ id: 'SC-01', text: 'first', trace: 'x' }];
    S.tests = [{ sc: 'SC-01', input: 'i', expected: 'e', actual: 'a', hostile: true, result: 'pass' }];
    save(); render();
  });
  await page.evaluate(() => { delSC(0); addSC(); S.sc[0].text = 'something else'; });
  const reused = await page.evaluate(() => ({
    id: S.sc[0].id,
    inherited: S.tests.some(t => t.sc === S.sc[0].id && t.result === 'pass'),
    testsKept: S.tests.length,
  }));
  check('the next criterion reuses the id', reused.id === 'SC-01');
  check('but does not inherit the deleted criterion\'s passing test', !reused.inherited);
  check('the test itself is kept, unlinked', reused.testsKept === 1);

  check('no uncaught errors', errors.length === 0, errors.join(' | '));
  await browser.close();
  console.log(failures ? `\n${failures} FAILURE(S)` : '\nALL CHECKS PASSED');
  process.exit(failures ? 1 : 0);
})();
