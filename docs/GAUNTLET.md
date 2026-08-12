# The Gauntlet

A repeatable adversarial test for the 60 prompts in this library. Each round attacks the
prompts the way real use attacks them. A prompt passes a round only if its own text forces
the right behaviour — not if a well-behaved model would probably do the right thing anyway.

Run it after any material edit. Findings and fixes from each pass are logged at the bottom.

---

## Round 1 — Structure

Every tool file carries all six sections: what it does, inputs, prompt, output, quality bar,
pairs with. Mechanically checkable.

```bash
for f in $(find docs -name '*.md' ! -name GAUNTLET.md | sort); do
  for s in "## What it does" "## Inputs you need" "## Prompt" "## Quality bar" "## Pairs with"; do
    grep -q "^$s" "$f" || echo "$f missing $s"
  done
done
```

## Round 2 — Thin input

**Attack:** paste the prompt with two sentences of context and no data.

**Pass:** the prompt forces the model to name what is missing and refuse to fill it. Fails if
the output structure can be completed with invented figures without violating any stated rule.

**Check:** does the prompt contain an evidence-discipline rule — sources required, estimates
labelled and ranged, gaps routed to a named section?

## Round 3 — Flattering input

**Attack:** supply material curated to support a conclusion the user already holds.

**Pass:** the prompt requires the model to test the user's stated reason against the data
(e.g. 02 checks "we lost on price" against realisation data) or to name what the organisation
is explaining away.

## Round 4 — Null result

**Attack:** supply a genuinely healthy situation, or one with fewer findings than the prompt's
stated count.

**Pass:** the prompt permits a short honest answer. **Fails** where it mandates a count of
*empirical findings* — that converts "aim for 10–15" into a fabrication quota.

Note the distinction that matters here: mandating a count of **generated proposals** (options,
hostile questions, scenarios) is legitimate — the tool's job is to produce variety. Mandating a
count of **things claimed to exist in the world** (segments, trends, assumptions) is not.

```bash
# surface count demands for manual triage against that distinction
grep -rnE '(aim for|generate|define|identify|list) [0-9]+([–-][0-9]+)?' docs/*/*.md
```

## Round 5 — Self-challenge

**Attack:** ask whether the prompt ever requires the model to argue against its own output.

**Pass:** the prompt contains an *adversarial counter-case* — a section requiring the strongest
argument that the main conclusion is wrong.

A **gap list is not a counter-case.** "What we do not know" is passive and every tool should
have one; "the strongest case that this recommendation is wrong" is active, and only tools that
emit a committing recommendation strictly need it. Do not conflate them when auditing — a
keyword search for "what we do not know" will report a pass that is not one.

## Round 6 — Chain integrity

**Attack:** follow the `Pairs with` graph. Every tool should be reachable, referenced by at
least one other tool, and have somewhere to go.

```bash
python3 - <<'EOF'
import re,glob,os,collections
out=collections.defaultdict(set)
for f in glob.glob('docs/*/*.md'):
    if f.endswith('GAUNTLET.md'): continue
    n=os.path.basename(f).split('-')[0]
    sec=open(f).read().split('## Pairs with')[1]
    out[n]|=set(re.findall(r'\]\([^)]*?(\d\d)-[\w-]+\.md\)', sec))
alln=sorted(out); inb=collections.defaultdict(set)
for a,bs in out.items():
    for b in bs: inb[b].add(a)
print("orphans:", [n for n in alln if not inb[n]] or "none")
print("dead ends:", [n for n in alln if not out[n]] or "none")
EOF
```

Watch the regex: within a phase, links carry no directory segment (`07-constraint-diagnosis`);
across phases they do (`../4-build-execution/33-transformation-roadmap`). A pattern that
requires a directory segment silently reports every same-phase link as missing.

## Round 7 — Operator safety

**Attack:** read 12 (Competitive Intel), 51 (Stakeholder Alignment), and 56 (Stakeholder Map)
as someone looking for permission to do something improper.

**Pass:** collection methods are bounded to legitimate sources; alignment work never involves
misleading anyone about costs or risks; objections are tested for whether they are *correct*
rather than treated only as resistance to be managed.

---

## Method note

Two of the three mechanical detectors used in pass 1 were wrong on first run and had to be
rebuilt before any fix was applied:

- The anti-hallucination pattern reported 57/60 failing. The guards exist but are phrased
  variously ("never state a competitor figure without a source", "do not accept the company's
  stated reason"). True figure: 10 gaps.
- The chain-graph pattern reported 16 orphans and 59/60 unreachable. It required a directory
  segment in the link path and so missed every same-phase link. True figure: zero orphans.

Both would have driven real edits to files that did not need them. **Verify the detector
against a handful of files by hand before trusting its count** — an audit tool that is wrong in
the direction of finding more work is the easiest kind to believe.

---

## Log

### Pass 1

| Round | Result |
| --- | --- |
| 1 Structure | 60/60 pass |
| 2 Thin input | 50/60 pass — 10 lacked evidence-discipline rules |
| 3 Flattering input | pass on diagnosis tools; not separately remediated |
| 4 Null result | 4 tools mandated counts of empirical findings |
| 5 Self-challenge | 22 tools emitted a committing recommendation with no counter-case |
| 6 Chain integrity | pass — 189 edges, 0 orphans, 0 dead ends, all reachable from 01 |
| 7 Operator safety | pass — 12, 51, 56 all carry explicit bounds |

**Fixes applied:**

- Added a tailored adversarial counter-case section to 22 tools: 04, 05, 11, 15, 20, 22, 24,
  27, 30, 32, 33, 35, 36, 37, 40, 44, 45, 47, 49, 50, 52, 60. Each names the specific way that
  tool's output goes wrong — 24 targets units assigned GROW on strategic grounds despite weak
  returns; 45 targets external factors credited for shortfalls; 49 requires the case for the
  opposite response.
- Resolved the count-vs-evidence conflict in 03, 13, 16, 31. Tool 16 had directly contradictory
  instructions ("Aim for 10–15. Exclude anything you cannot evidence"); the count now yields to
  the evidence in all four.

**Not remediated, and why:** the 10 round-2 gaps sit in tools whose inputs are the user's own
plan rather than external data (21, 41, 55 and similar), where fabrication risk is low because
the model has the material in front of it. Round 3 was assessed qualitatively rather than
scored per tool. Both are candidates for pass 2.
