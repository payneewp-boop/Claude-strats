# 08 · Root Cause Scan

**Phase:** 1 — Diagnose · **Use when:** a problem keeps recurring after being "fixed"

## What it does

Traces a symptom back through its causal chain to causes that are actually actionable,
separating correlation from mechanism and stopping at the level where an intervention would
hold. Recurring problems are almost always symptoms treated as causes.

## Inputs you need

- A precise statement of the symptom, with its magnitude and frequency
- Timeline: when it started, when it recurs, what changed around those points
- Previous fixes attempted and what happened afterwards
- Process documentation, incident notes, or post-mortems if they exist

## Prompt

```
You are running a root cause analysis on: [SYMPTOM, STATED WITH MAGNITUDE AND FREQUENCY].

Produce:

1. SYMPTOM DEFINITION
   Restate the symptom precisely: what happens, how often, how big, to whom, since when.
   Separate the symptom from its consequences and from the story people tell about it.

2. CAUSAL CHAIN
   Build the chain from symptom backwards. For each link: cause | evidence it causes the
   level above (not merely correlates) | confidence | how far upstream it sits.
   Go until you reach causes that are structural — incentives, information flow, ownership,
   process design, capability — rather than individual actions or effort levels. Stop when
   the next "why" leaves the boundary of what this organisation can change, and say so.

3. MULTIPLE ROOTS
   Most persistent problems have two or three independent roots, not one. Identify each
   distinct root and estimate the share of the symptom it accounts for. If they interact
   (fixing one makes another worse or better), state how.

4. CORRELATION CHECK
   For each proposed cause, state what else could explain the same pattern, and what
   evidence distinguishes your explanation from the alternative. Explicitly flag any link
   where you have timing correlation but no mechanism.

5. WHY PREVIOUS FIXES DID NOT HOLD
   For each past attempt in the material: what level of the chain it addressed, and why
   the problem returned. A fix aimed three links below the root will always be temporary —
   say which link each fix hit.

6. INTERVENTION POINTS
   Table: root cause | intervention that would address it | leverage (how much of the
   symptom it removes) | difficulty | how long before the effect shows | how you would
   know it worked.
   Rank by leverage ÷ difficulty.

7. WHAT WOULD DISPROVE THIS ANALYSIS
   Name the observation that would show your root cause is wrong.

Rules:
- Never stop at "human error", "lack of communication", "poor training", or "culture".
  These are labels for a missing analysis. Ask what makes the error likely, what makes
  communication fail, why training does not stick.
- Distinguish "this caused it" from "this happened at the same time." Say which you have.
- Do not blame individuals. Blame the system that made the behaviour rational.

MATERIAL:
[PASTE SYMPTOM DATA, TIMELINE, PREVIOUS FIXES, PROCESS NOTES, POST-MORTEMS]
```

## Output you should get

A causal chain with evidence at each link, two or three named roots with shares, and a
leverage-ranked intervention table.

## Quality bar

- **Section 5 predicts the future.** If it shows every past fix hit the same shallow link,
  expect the proposed fix to be resisted for the same reasons.
- **Reject** any chain that terminates at "people did not follow the process." Ask why not
  following it was the sensible choice for them.
- **Check section 4 honestly.** Timing correlation is the most common failure mode in
  root cause work, and it produces confident, wrong answers.

## Pairs with

- Precede with [05 Momentum Read](05-momentum-read.md) to date the inflection
- Follow with [10 Test Plan](10-test-plan.md) to validate the root before investing in the fix
- Follow with [49 Corrective Actions](../5-govern-value/49-corrective-actions.md)
