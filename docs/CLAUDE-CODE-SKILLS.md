# Five skills that widen what Claude Code can do

Claude Code ships with a fixed set of capabilities. Four community skills and one paid API
extend it in directions the base tool does not reach: watching video, researching the last
thirty days, stripping the AI register out of prose, and stopping the agent from
over-engineering. This file records what each one actually is, what it costs, and where the
public claims about it need checking.

Researched 2026-08-19. Star counts and pricing move; re-verify before relying on either.

| Skill | Limitation it addresses | Keys or cost |
| --- | --- | --- |
| [claude-video](https://github.com/bradautomates/claude-video) | Claude cannot watch video | Optional Whisper key; heavy token use |
| [last30days](https://github.com/mvanhorn/last30days-skill) | Training cutoff, SEO-polluted search | Free core; optional paid sources |
| [humanizer](https://github.com/blader/humanizer) | Generic AI prose register | None |
| [ponytail](https://github.com/DietrichGebert/ponytail) | Agent over-engineering | None |
| [ScrapeCreators](https://scrapecreators.com/) | Social platforms behind auth | Paid, pay-as-you-go |

---

## 1 · claude-video — give Claude eyes

**Repo:** [bradautomates/claude-video](https://github.com/bradautomates/claude-video)

**The limitation.** Claude cannot watch a video. Handed a YouTube link it reads a title, or an
existing transcript if one happens to be exposed, and infers the rest.

**What the skill does.** `/watch [URL or local path] [question]` downloads the video, extracts
frames, transcribes the audio, and hands frames and transcript to Claude together.

**Requirements.** `ffmpeg` and `yt-dlp` on PATH — auto-installed via Homebrew on macOS, with
platform-specific commands offered for Linux and Windows on first run. A Groq or OpenAI key is
optional and used only for Whisper transcription when the video carries no native captions. Code
execution must be enabled in the host.

**Install.**

```
/plugin marketplace add bradautomates/claude-video     # Claude Code
npx skills add bradautomates/claude-video -g           # Codex, Cursor, and other hosts
```

A `.skill` bundle can also be uploaded through Settings on claude.ai.

**Flags.** `--start` and `--end` scope the analysis to a segment. `--detail` trades quality
against speed and cost.

**Where it degrades.** Frame budgets are capped, so coverage thins past roughly ten minutes
unless `--detail token-burner` is used. Frames dominate token cost — this is the most expensive
of the five to run. Whisper charges apply only to videos without captions.

**Fork worth knowing about.** [mathiaschu/watch](https://github.com/mathiaschu/watch) transcribes
locally with mlx-whisper and needs no API key at all.

---

## 2 · last30days — beat the training cutoff

**Repo:** [mvanhorn/last30days-skill](https://github.com/mvanhorn/last30days-skill)

**The limitation.** Two of them, really. Model knowledge stops at a cutoff date, and ordinary web
search returns what ranks rather than what people are actually saying.

**What the skill does.** `/last30days [topic]` sweeps fifteen or more sources in parallel and
synthesises one cited brief. Reddit, X, YouTube with full transcripts, Hacker News, GitHub, arXiv,
Polymarket, StockTwits, Techmeme, Digg, LinkedIn, TikTok, Instagram, Bluesky, Threads, Pinterest,
Xiaohongshu, and general web search. Results are ranked by engagement — upvotes, likes, view
counts, prediction-market odds — not by SEO position. Output as markdown, JSON, or cited HTML.

**Requirements.** Python 3.12+. Reddit, Hacker News, Polymarket, GitHub, arXiv, Techmeme, and
StockTwits need no keys. X needs browser cookies or API keys; YouTube needs `yt-dlp`; TikTok,
Instagram, and LinkedIn need a ScrapeCreators key (see below); Perplexity, Brave Search, and
Bluesky are each optional. Sources you have not keyed degrade gracefully rather than failing the
run.

**Install.**

```
/plugin marketplace add mvanhorn/last30days-skill
```

`--days=N` changes the lookback window: `--days=7` for a weekly roundup, `--days=14` for a
fortnight.

**Where it degrades.** The window is roughly thirty days by design — it is a recency tool, not an
archive. Coverage depends on which optional keys you supply.

---

## 3 · humanizer — strip the AI register

**Repo:** [blader/humanizer](https://github.com/blader/humanizer) · MIT · ~36k stars

**The limitation.** Model prose defaults to a statistically average register: inflated
transitions, forced three-item lists, sales-adjacent framing, a small set of tell-tale words.

**What the skill does.** Rewrites text against thirty-five catalogued patterns, grounded in
Wikipedia's maintained "Signs of AI Writing" page. It preserves facts — it will not invent names,
dates, or quotes — and will match your voice if given a writing sample.

**Install.**

```
npx skills add blader/humanizer --global
/plugin marketplace add blader/humanizer
```

A zip is available from releases for Claude Desktop; the `SKILL.md` can also be copied into a
skills folder by hand.

**Use.** `/humanizer [text]`, or plain language: "humanize the prose in docs/file.md".

**The caveat that matters.** This is a stylistic rewriter, not a detector-evasion tool. It will
not reliably defeat AI-detection software, and treating it as though it does is the common
misuse.

---

## 4 · ponytail — stop the over-engineering

**Repo:** [DietrichGebert/ponytail](https://github.com/DietrichGebert/ponytail)

**The limitation.** Agents over-build. Asked for a date picker, Claude installs a library and
writes three abstractions where twenty lines would have done.

**What the skill does.** Imposes a priority ladder before any code is written: skip the feature,
reuse existing code, use the standard library, then write the minimal thing. YAGNI enforced as a
skill rather than left to a CLAUDE.md line the agent may or may not honour.

**Install.**

```
/plugin marketplace add DietrichGebert/ponytail
/plugin install ponytail@ponytail
```

Cursor, Windsurf, and Cline need the rule files copied manually. No configuration.

**Commands.** `/ponytail [lite | full | ultra | off]` sets intensity. `/ponytail-review` analyses a
diff, `/ponytail-audit` sweeps a whole repo, `/ponytail-debt` tracks deferred shortcuts.

**The benchmark, read carefully.** The headline is "~54% less code (up to 94%) · ~20% cheaper ·
~27% faster". The method: twelve feature tasks on a real FastAPI + React repo, run with Haiku 4.5,
metrics taken from `git diff` output comparing identical agents with and without the skill. That
is self-reported, single-repo, single-model — useful as a signal, not as an independent result.
The older "80–94% less code" figure came from single-shot tests that the maintainer himself
describes as less reliable than the agentic benchmark.

**Where it degrades.** The gains concentrate almost entirely on over-building tasks — a date
picker went from 404 lines to 23 — and approach zero on code that was already minimal. Results
also depend on model compliance; some reasoning models spend tokens deliberating about the ladder
instead of following it.

---

## 5 · ScrapeCreators — the paid dependency

**Site:** [scrapecreators.com](https://scrapecreators.com/)

**Not a skill.** This is a commercial social-scraping API. It appears alongside the other four
because it is what unlocks the TikTok, Instagram, and LinkedIn sources inside `last30days`.

**Coverage.** TikTok, Instagram, YouTube, X, Reddit, LinkedIn, Threads, plus the Meta and Google
Ad Libraries — 36+ platforms, returning parsed JSON rather than raw HTML.

**Pricing.** Pay-as-you-go, credits do not expire. Roughly $10 for 5k credits and $47 for 25k, with
100 free credits granted at signup.

**Discrepancy to resolve before you depend on it.** The `last30days` README advertises a
ScrapeCreators free tier of 10,000 calls. ScrapeCreators' own pricing page describes 100 free
credits at signup. One of the two is stale. Check at signup rather than designing a workflow
around the larger number.

---

## Notes on the sourcing

Everything above for the four GitHub skills is read from the repositories themselves. The
ScrapeCreators section is second-hand: that domain is blocked by the network egress proxy in the
environment this was researched from, so its details come from search results and from the
`last30days` README rather than from the vendor's own pages.

Circulating star counts — ponytail ~104k, last30days ~39k, humanizer ~36k — mostly come from
aggregator sites and move quickly. The humanizer figure was read from GitHub directly; the other
two were not.

Four of the five are free and open source. ScrapeCreators is not, which is worth stating plainly
anywhere this set gets described as five free repos.
