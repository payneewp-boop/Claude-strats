# 29 · Allocation Choices

**Phase:** 3 — Choose Strategy · **Use when:** the strategy changed but the budget did not

## What it does

Compares where money and people currently go against where the stated strategy says they
should go, then produces a specific reallocation with sources and uses that balance. Most
strategies fail here: the deck changes, the budget does not, and last year's allocation
quietly wins.

## Inputs you need

- Current budget and headcount by unit, function, initiative, and segment
- Last 3 years of allocation history
- The stated strategic priorities
- Fixed commitments: contracts, regulatory spend, maintenance, debt service

## Prompt

```
You are producing the resource reallocation required by [COMPANY]'s strategy.

Produce:

1. CURRENT ALLOCATION
   Table: area | budget | % of total | headcount | % of headcount | 3-year trend.
   Cut it by whichever dimension the strategy is expressed in — segment, product,
   geography, or initiative. If the strategy is expressed in a dimension the budget is not
   tracked in, say so prominently: that mismatch is itself a finding, and it is why
   strategies drift.

2. STRATEGY-IMPLIED ALLOCATION
   Given the stated priorities, what proportion of resource should each area receive?
   Derive this from the strategy's own logic — growth targets, priority tiers, value pool
   choice — not from a round-number preference. Show the derivation.

3. THE GAP
   Table: area | current % | implied % | gap in percentage points | gap in currency and
   headcount | direction of travel over the last 3 years (is the gap closing or widening).
   Rank by absolute gap. State the total percentage of resource that would need to move.

4. INERTIA CHECK
   Which areas have received roughly the same share for years regardless of strategy
   changes? Name them. Persistent allocation is the strongest evidence of what an
   organisation is actually optimising for, whatever its documents say.

5. SOURCES AND USES
   Table: from (area, amount, what specifically stops or shrinks) | to (area, amount, what
   it funds) .
   Sources must equal uses. "Efficiency savings" is not a source unless you name the
   specific activity being stopped and who currently does it.

6. THE STOPS
   The explicit list of what ends: which projects, which roles, which spend lines, which
   customer commitments. With: annual value released, one-off cost of stopping, who is
   affected, and notice or contractual constraints.
   Any reallocation without a stop list is an unfunded aspiration.

7. PEOPLE MOVES
   Where headcount shifts: which teams shrink, which grow, whether the skills transfer or
   need rehiring, and the realistic timeline including notice periods and ramp time. State
   how much of the shift is redeployment versus exit and hire.

8. PHASING
   Not everything moves in one budget cycle. Phase over [PERIOD]: what moves now, what next
   cycle, what is contingent. For each phase, the trigger to proceed.

9. WHAT WILL BE RESISTED
   Which reallocations will be fought hardest, by whom, with which argument, and what
   evidence answers that argument. Then: which of these arguments is actually right?

Rules:
- Sources must equal uses in every phase. Show the arithmetic.
- Include maintenance, regulatory, and other genuinely fixed spend as unavailable, and
  state what proportion of the base that represents — it is often most of it.
- Do not propose reallocation of resource that is contractually committed without stating
  the exit cost.

MATERIAL:
[PASTE CURRENT BUDGET, HEADCOUNT, ALLOCATION HISTORY, STRATEGIC PRIORITIES, FIXED COMMITMENTS]
```

## Output you should get

A current-vs-implied gap table, an inertia finding, a balanced sources-and-uses table, an
explicit stop list, and a phased plan with triggers.

## Quality bar

- **Section 6 is the whole tool.** No stops, no strategy.
- **Section 4 usually explains why the last strategy did not happen.**
- **Check sources = uses.** Reallocations that only list uses are budget requests.

## Pairs with

- Precede with [24 Portfolio Review](24-portfolio-review.md) and [19 Segment Priorities](../2-map-markets/19-segment-priorities.md)
- Follow with [36 Resource Plan](../4-build-execution/36-resource-plan.md)
- Follow with [37 Change Plan](../4-build-execution/37-change-plan.md)
