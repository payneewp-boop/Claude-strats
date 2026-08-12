# 45 · Performance Review

**Phase:** 5 — Govern Value · **Use when:** you need an honest read on how a period actually went

## What it does

Reviews performance in a way that separates market movement from execution, luck from skill,
and decision quality from outcome quality. A good quarter caused by a rising market teaches
nothing; a bad quarter caused by one bad decision teaches a lot.

## Inputs you need

- Results for the period vs. plan, decomposed as far as your data allows
- Market data for the same period: category growth, competitor performance, pricing
- The decisions made during the period and the information available when each was made
- Prior period reviews and the commitments made in them

## Prompt

```
You are reviewing performance for [BUSINESS / PROGRAMME] over [PERIOD].

The question is not "did we hit the number." It is "what did we learn about how this
business actually works, and what do we do differently."

Produce:

1. RESULTS VS. PLAN
   Table: metric | plan | actual | variance | % variance.
   Then decompose the variance into: volume, price, mix, cost, one-offs, FX — whatever the
   data supports. A single-line variance is a report; the decomposition is the review.

2. MARKET VS. EXECUTION
   For each major variance, separate the market's contribution from ours. If the category
   grew 11% and we grew 7%, we lost share while reporting growth. Show the split explicitly
   for every headline result. State clearly whether the period's performance was earned or
   received.

3. DECISION QUALITY VS. OUTCOME QUALITY
   Review the significant decisions made in the period. For each: what was decided, what
   was known at the time, whether it was a sound decision given that information, and what
   the outcome was.
   Fill the four boxes:
   - Good decision, good outcome: reinforce the process
   - Good decision, bad outcome: variance — do not punish it, or people stop taking sound risks
   - Bad decision, good outcome: the most dangerous box, because it gets rewarded and repeated
   - Bad decision, bad outcome: learn
   Populate each box with real examples from the period.

4. WHAT WORKED AND WHY
   Not a list of wins — an explanation of the mechanism. What did we do that caused the
   result, and is it repeatable at scale, or was it specific to circumstances that will not
   recur?

5. WHAT DID NOT WORK AND WHY
   Same standard. Root cause, not symptom. Distinguish problems of plan, execution,
   capability, and environment.

6. COMMITMENTS FROM LAST REVIEW
   Table: commitment | owner | status | if not done, why.
   Reviews that do not track their own previous commitments produce the same commitments
   every quarter.

7. WHAT WE NOW BELIEVE THAT WE DID NOT
   The genuine updates to our model of the business: what proved true, what proved false,
   what surprised us. This is the highest-value section and the one most often missing.

8. IMPLICATIONS FOR THE PLAN
   Given all of the above, what changes: targets, resource, sequencing, or the strategy
   itself? State whether the plan stands, adjusts, or needs rework — and be willing to say
   the third.

9. ACTIONS
   Table: action | owner | date | expected effect. Few and specific.

10. THE FLATTERING READ WE SHOULD DISTRUST
   Name the part of this review most likely to be self-serving: an external factor credited
   for a shortfall, or execution credited for a result the market delivered. Restate that
   section as an unsympathetic outsider would, and say which version you believe.

Rules:
- Every variance gets decomposed. "Below plan due to challenging market conditions" is not
  a finding until you show what the market actually did.
- Do not attribute good results to skill and bad results to conditions. Apply the same test
  to both.
- Name what was learned even where the number was met.

MATERIAL:
[PASTE RESULTS, PLAN, MARKET DATA, DECISIONS MADE, PRIOR REVIEW COMMITMENTS]
```

## Output you should get

A decomposed variance, an explicit market-vs-execution split, a populated decision-quality
matrix, tracked prior commitments, and a statement of genuine belief updates.

## Quality bar

- **Section 3's "bad decision, good outcome" box** is the one that protects you from
  learning the wrong lesson from a lucky quarter.
- **Section 2 is non-negotiable.** Growth in a faster-growing market is decline.
- **Section 7 is the whole point.** A review that updates no beliefs was a status report.

## Pairs with

- Precede with [44 Value Realization](44-value-realization.md)
- Follow with [49 Corrective Actions](49-corrective-actions.md)
- Follow with [05 Momentum Read](../1-diagnose/05-momentum-read.md) if the trend read is unclear
