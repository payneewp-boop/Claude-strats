# 23 · Business Case Builder

**Phase:** 3 — Choose Strategy · **Use when:** you need funding and the numbers must survive scrutiny

## What it does

Builds a business case with every driver exposed, the downside modelled as seriously as the
upside, and the assumptions ranked by how much they move the answer. The aim is a case that
a sceptical CFO can interrogate line by line without it falling apart.

## Inputs you need

- The proposal: what you would do, over what period
- Cost estimates: capital, operating, people, one-off
- Revenue logic: which customers, buying what, at what price, at what adoption rate
- Comparable precedents — internal or external — for how similar initiatives actually performed
- The company's hurdle rate, payback expectation, and capital constraints

## Prompt

```
You are building the business case for [INITIATIVE] at [COMPANY]. It will be reviewed by
people whose job is to find the weak assumption. Build it so the weak assumptions are
already labelled.

Produce:

1. THE PROPOSITION
   What we do, for whom, why now, and what changes if we do it. Five sentences.

2. DRIVER TREE
   Decompose the financial outcome into its drivers, and those into sub-drivers, until you
   reach inputs that can be independently estimated or measured. Show it as an indented
   tree with the value and source for each leaf.
   Example depth: revenue → customers × revenue per customer → (new + retained) ×
   (price × units) → acquisition rate × conversion × ...

3. FINANCIAL MODEL
   Year-by-year for [PERIOD]: revenue, direct costs, gross margin, operating costs,
   EBIT, capex, free cash flow, cumulative cash. Show the ramp assumptions explicitly —
   ramp is where cases are usually too optimistic.
   Then: NPV at the hurdle rate, IRR, payback period, peak cash requirement.
   Peak funding need matters as much as NPV and is routinely omitted.

4. THREE CASES
   BASE, DOWNSIDE, UPSIDE. For each: the specific assumption changes that define it (not
   a blanket percentage haircut), and the resulting NPV, payback, and peak cash.
   The downside must be a realistic bad outcome — slower adoption, competitive response,
   cost overrun — not a token 10% reduction.

5. SENSITIVITY RANKING
   Table: assumption | base value | range | NPV at low | NPV at high | swing.
   Rank by swing. Name the two or three assumptions that determine whether this works.
   State what evidence exists for each and what it would cost to reduce that uncertainty
   before committing.

6. BREAK-EVEN CONDITIONS
   For the top drivers, the value at which the case returns exactly the hurdle rate.
   State each as a plain sentence: "this works as long as we reach at least 340 customers
   by month 18." These are the conditions to monitor after approval.

7. COMPARABLE EVIDENCE
   What happened when this company, or a comparable one, did something similar? If prior
   initiatives of this type systematically over-delivered or under-delivered, adjust the
   base case for that bias and show the adjustment. Name it explicitly.

8. WHAT IS NOT IN THE NUMBERS
   Strategic option value, capability built, and risks not modelled: cannibalisation,
   management attention, opportunity cost of the capital and of the people. State each
   qualitatively and, where possible, size it.

9. THE HONEST WEAKNESS
   The single element most likely to make this case wrong, stated as the reviewer would
   state it.

Rules:
- No number appears without a stated source or assumption.
- Include cannibalisation of existing revenue explicitly. Cases that ignore it are wrong
  by construction.
- Include the fully loaded cost of internal people, not just incremental cash.
- Do not present a case with no downside scenario.

MATERIAL:
[PASTE PROPOSAL, COSTS, REVENUE LOGIC, COMPARABLES, HURDLE RATE]
```

## Output you should get

A driver tree that bottoms out in measurable inputs, a full model with peak cash, three
genuinely different cases, a swing-ranked sensitivity table, and break-even conditions
written as monitorable sentences.

## Quality bar

- **Section 6 is what you carry into governance.** Break-even conditions become the tracking
  metrics after approval.
- **Section 7 is the anti-optimism device.** If similar past initiatives delivered 60% of
  case, the base case should say so.
- **Reject** any case where the downside is a uniform haircut. That is not a scenario, it is
  a discount.

## Pairs with

- Precede with [15 Market Sizing](../2-map-markets/15-market-sizing.md) and [03 Assumption Audit](../1-diagnose/03-assumption-audit.md)
- Follow with [28 Investment Judgment](28-investment-judgment.md) for the non-financial verdict
- Feed section 6 into [39 Benefit Tracking](../4-build-execution/39-benefit-tracking.md)
