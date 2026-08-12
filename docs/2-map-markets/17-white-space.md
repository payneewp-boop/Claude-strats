# 17 · White Space

**Phase:** 2 — Map Markets · **Use when:** the existing market map is fully occupied

## What it does

Finds demand the current market structure fails to serve — customers who over-buy, under-buy,
work around, or abstain entirely — and tests each gap for whether it is a real opportunity or
merely an empty square on a chart. Most "white space" is empty for a reason; this tool makes
you say what the reason is.

## Inputs you need

- Market map and competitor positioning ([11](11-market-mapping.md), [12](12-competitive-intel.md))
- Segmentation, especially any segment flagged as miserved ([13](13-customer-segmentation.md))
- Customer complaints, workarounds, support tickets, feature requests, churn reasons
- Non-consumption evidence: who in the market buys nothing at all, and why

## Prompt

```
You are looking for white space in [MARKET] for [COMPANY].

An empty position on a positioning chart is not automatically an opportunity. For every gap
you find, you must state why nobody is there — and whether that reason still holds.

Produce:

1. GAP INVENTORY
   Search systematically across these gap types and list what you find in each:
   - OVER-SERVED: customers paying for capability they do not use — the classic
     disruption entry point
   - UNDER-SERVED: customers whose need exceeds what any current offer delivers
   - NON-CONSUMERS: people with the need who buy nothing, because current offers are too
     expensive, too complex, or require skills they lack
   - WORKAROUNDS: customers assembling their own solution from parts, spreadsheets, or
     manual effort — the strongest signal of unmet need
   - UNBUNDLING: parts of a bundle customers would buy separately
   - BUNDLING: separate purchases customers would prefer combined
   - MOMENT GAPS: needs at a time, place, or step of the journey nobody serves
   - SEGMENT × NEED CELLS: build a grid of segments against needs and mark the empty cells

2. FOR EACH CREDIBLE GAP
   Table: gap | evidence it exists (specific, from the material) | who has this need |
   estimated size | why nobody serves it today | whether that reason still holds |
   what it would take to serve it | who would be best placed to serve it (us or someone else).

3. THE "WHY EMPTY" TEST
   For each gap, classify the reason it is empty:
   - ECONOMICS: cannot be served profitably at current cost structures
   - CAPABILITY: nobody can do it yet
   - REGULATION: not permitted
   - INCUMBENT BLINDNESS: everyone is anchored on the same customer definition
   - TOO SMALL: real but not worth anyone's time
   - NOT ACTUALLY A NEED: the demand is imagined
   Only INCUMBENT BLINDNESS, and ECONOMICS or CAPABILITY that a change has recently
   altered, represent genuine opportunity. Say which category each gap falls into.

4. RANKED OPPORTUNITIES
   The gaps that survive section 3, ranked by size × our right to win. For each: what we
   would need that we do not have, and how long it would take to get it.

5. WHAT WOULD MAKE AN EMPTY GAP FILLABLE
   For the largest gaps blocked by economics or capability, state the specific change —
   cost threshold, technology, regulation — that would open them, and how close it is.

6. WHO ELSE SEES THIS
   Which competitors or adjacent players are best positioned to take each gap, and any
   evidence in the material that they are already moving.

Rules:
- Every gap must have evidence of demand from the material — a complaint, a workaround, a
  churn reason, a non-consumption pattern. No gaps invented from a blank chart quadrant.
- Be ruthless in section 3. Most gaps die there, and that is the tool working correctly.
- Size every surviving gap, even roughly.

MATERIAL:
[PASTE MARKET MAP, SEGMENTATION, COMPLAINTS, WORKAROUNDS, CHURN REASONS]
```

## Output you should get

A gap inventory across eight gap types, a "why empty" classification that kills most of them,
and a short ranked list of survivors.

## Quality bar

- **Most gaps should die in section 3.** If ten gaps go in and nine survive, the test was not
  applied honestly.
- **Workaround evidence is the strongest signal** in the whole tool — customers doing manual
  work are telling you exactly what to build.
- **Reject** any gap whose evidence is "no competitor is positioned here."

## Pairs with

- Precede with [13 Customer Segmentation](13-customer-segmentation.md) and [16 Trend Scan](16-trend-scan.md)
- Follow with [21 Strategic Options](../3-choose-strategy/21-strategic-options.md)
- Test survivors with [10 Test Plan](../1-diagnose/10-test-plan.md)
