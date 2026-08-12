# 22 · Pricing Strategy

**Phase:** 3 — Choose Strategy · **Use when:** price is set by cost-plus, history, or fear

## What it does

Sets price from the value delivered and the customer's willingness to pay, tests it against
competitive alternatives and your cost floor, then models the P&L effect of the change
including volume response. Pricing is usually the highest-leverage and least-examined
decision in a business.

## Inputs you need

- Current price list, actual realised prices, and the size of the gap (discounting)
- Cost data: variable cost per unit, contribution margin, fixed cost base
- Competitor prices for comparable offers
- Value evidence: what the customer saves, earns, or avoids by using your product
- Price elasticity evidence: past price changes and what happened to volume

## Prompt

```
You are setting pricing strategy for [PRODUCT / PORTFOLIO] at [COMPANY].

Produce:

1. CURRENT STATE
   List price vs. realised price by segment or product. Quantify the discount leakage:
   where it goes, who authorises it, and what it costs in contribution. Show the
   distribution of realised prices, not just the average — the tail is where the money is.

2. VALUE BASIS
   For each segment, quantify the economic value delivered to the customer: what they
   earn more, spend less, or avoid because of us, versus their next best alternative.
   Show the calculation. Then state what share of that created value we currently capture.
   If the value cannot be quantified from the material, say so — do not assert it.

3. WILLINGNESS TO PAY
   For each segment, state the WTP evidence available: win/loss at price points, discount
   acceptance patterns, competitor price acceptance, survey or interview data.
   Give a range, and mark clearly where you are inferring rather than measuring.

4. COMPETITIVE PRICE MAP
   Table: competitor | comparable offer | their price | price per unit of value delivered |
   their likely cost position | how they would respond to our move.
   Note where we are compared on list price but compete on realised price — these differ
   and the difference matters.

5. PRICE FLOOR AND CEILING
   FLOOR: variable cost, plus the contribution needed to cover the fixed base at realistic
   volume. CEILING: the value delivered, or the next best alternative's price plus
   switching cost — whichever binds first. State both, by segment.

6. PRICING ARCHITECTURE
   Recommend the structure, not just the number:
   - metric (what we charge per — user, unit, outcome, usage, subscription)
   - tiering and what differentiates each tier
   - segment differentiation and the fence that keeps segments from arbitraging each other
   - discount policy: who may discount, how much, in exchange for what
   For each choice, state the reasoning and the risk.

7. P&L IMPACT
   Model three price scenarios (e.g. +3%, +7%, +12%, or the moves relevant here). For each:
   assumed volume response with its basis, revenue change, contribution change, and the
   volume loss the business could absorb before the move destroys value (the break-even
   elasticity). Show the break-even explicitly — it is usually far more generous than
   sales teams believe.

8. IMPLEMENTATION RISK
   Customer reaction, sales force resistance, contractual constraints, channel conflict,
   and the sequence that reduces each. State what you would pilot first.

9. THE CASE AGAINST THIS PRICE
   Argue the other side: what would have to be true for this price move to lose money, and
   how far from that are we? Name the customer segment most likely to leave, the competitor
   most likely to undercut, and the assumed elasticity that carries the most weight.

Rules:
- Never recommend cost-plus. Cost sets the floor, not the price.
- State the assumed elasticity explicitly and its evidence base. If there is none, say the
  model is untested and design a test.
- Do not recommend a single price where segment differentiation is possible and defensible.

MATERIAL:
[PASTE PRICE LISTS, REALISED PRICES, COSTS, COMPETITOR PRICING, VALUE EVIDENCE]
```

## Output you should get

A realised-price distribution, a quantified value basis, a floor/ceiling by segment, a full
architecture recommendation, and a three-scenario P&L with break-even elasticity.

## Quality bar

- **Section 7's break-even elasticity is the number to take into the room.** "We can lose
  18% of volume before this price rise hurts us" ends most pricing arguments.
- **Section 1 usually finds the fastest money.** Discount leakage is often larger than any
  list-price change under discussion.
- **Reject** an architecture with no fences. Segment pricing without fences collapses to the
  lowest price.

## Pairs with

- Precede with [13 Customer Segmentation](../2-map-markets/13-customer-segmentation.md)
- Follow with [18 Rival Move Map](../2-map-markets/18-rival-move-map.md) — price moves get answered
- Follow with [10 Test Plan](../1-diagnose/10-test-plan.md) to pilot before rolling out
