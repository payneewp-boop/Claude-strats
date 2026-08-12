# 11 · Market Mapping

**Phase:** 2 — Map Markets · **Use when:** you need to see the whole board before choosing a square

## What it does

Draws the market as a structure: the value chain from raw input to end customer, who occupies
each step, where money and power concentrate, and where the boundaries are shifting. This is
the base map every other Phase 2 tool builds on.

## Inputs you need

- Your industry and the adjacent ones that touch it
- Known players at each step: suppliers, competitors, channels, complementors, customers
- Any revenue/margin data by step, even approximate
- Recent structural events: entries, exits, integrations, disintermediation

## Prompt

```
You are mapping the structure of [INDUSTRY / MARKET], from the perspective of
[COMPANY, at its current position in the chain].

Produce:

1. VALUE CHAIN
   Lay out the chain as numbered steps from origin to end customer. For each step:
   what happens there, who the main players are, approximate share of total industry
   revenue, approximate share of total industry profit, and typical margin.
   Where profit share differs sharply from revenue share, flag it — that is where power sits.

2. PLAYER MAP
   Table: player | step(s) occupied | scale (relative) | integration (how many steps they
   span) | business model | apparent strategy.
   Include not just direct competitors but suppliers, channels, complementors, and any
   player from an adjacent industry moving in.

3. WHERE POWER SITS
   Apply structural analysis to each step: buyer power, supplier power, entry barriers,
   substitution threat, rivalry intensity. Rate each high/medium/low with the specific
   evidence. Then state which step of the chain currently captures the most value and why
   the structure allows it to.

4. BOUNDARIES AND HOW THEY ARE MOVING
   Where is the industry's edge blurring? Look for: adjacent players entering, steps
   collapsing into each other, intermediaries being bypassed, bundling or unbundling,
   regulation redrawing a line. For each: what is moving, who is driving it, and how far
   along it is.

5. OUR POSITION
   Mark where [COMPANY] sits, what it depends on upstream, who it depends on for access
   downstream, and how exposed each dependency is. Name the single dependency that would
   hurt most if it broke.

6. THE STRUCTURAL QUESTION
   Based on the map alone, state the one structural question this company should be
   asking about its position — the thing the map makes obvious but the org chart hides.

7. GAPS IN THIS MAP
   What you could not determine from the material, and what source would fill it.

Rules:
- Describe the market as it is, not as the company's segmentation describes it. If the
  company's internal categories do not match how value actually flows, say so.
- Include players the company probably does not count as competitors but who compete for
  the same customer budget or the same job to be done.
- Do not recommend. Map.

MATERIAL:
[PASTE INDUSTRY DATA, COMPETITOR LIST, YOUR POSITION, RECENT STRUCTURAL CHANGES]
```

## Output you should get

A numbered chain with revenue/profit shares, a player table, a power read per step, and one
sharp structural question.

## Quality bar

- **Section 1's revenue-vs-profit split is the money shot.** If both columns look the same
  at every step, the model is guessing — press it or supply real data.
- **Section 4 should name something uncomfortable.** Boundary shifts are what kill incumbents.
- **Reject** a map that only contains the company's usual competitor set.

## Pairs with

- Follow with [14 Profit Pool Analysis](14-profit-pool-analysis.md) to quantify section 1
- Follow with [17 White Space](17-white-space.md) to find the gaps in the map
- Feed section 5 into [42 Risk & Mitigation](../5-govern-value/42-risk-and-mitigation.md)
