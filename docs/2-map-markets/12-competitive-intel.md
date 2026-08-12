# 12 · Competitive Intel

**Phase:** 2 — Map Markets · **Use when:** your view of rivals is anecdotal or out of date

## What it does

Builds a disciplined profile of each significant competitor: their actual economics, their
strategy as revealed by behaviour rather than by their marketing, what they are good at, and
where they are vulnerable. Separates what you know from what you assume.

## Inputs you need

- Named competitor list, including non-obvious ones
- Public financials, filings, or credible estimates
- Their pricing, product range, and positioning as observed
- Win/loss notes from your own sales team
- Hiring patterns, announcements, partnerships, capital raises

## Prompt

```
You are building competitive intelligence profiles on [COMPETITOR LIST] for [COMPANY].
Judge competitors by what they do, not by what they say. Marketing claims are evidence of
positioning, not of capability.

For each competitor, produce a profile:

[COMPETITOR NAME]
- SCALE AND ECONOMICS: revenue, growth, margin, funding position. State source and date
  for each figure and mark estimates clearly.
- WHERE THEY MAKE MONEY: which products, segments, geographies actually carry their
  profit — not where their revenue is largest, if these differ.
- REVEALED STRATEGY: what their last 8 quarters of actions say they are pursuing. Use
  hiring, pricing moves, product launches, partnerships, capital allocation, and exits.
  If revealed strategy conflicts with stated strategy, say which to believe and why.
- CAPABILITIES: what they are genuinely good at, with the evidence. Rate each vs. us:
  ahead / parity / behind.
- COST POSITION: structurally cheaper, comparable, or more expensive than us, and why —
  scale, mix, geography, vertical integration, technology, or accounting differences.
- CUSTOMER PROOF: what customers actually say — retention, references, review data, and
  what our own win/loss notes reveal about why they beat us or we beat them.
- CONSTRAINTS: what limits them — capital, capacity, channel conflict, legacy commitments,
  ownership structure, regulatory exposure.
- VULNERABILITY: the specific place they would struggle to respond if attacked, and why
  their structure or commitments make response hard.
- LIKELY NEXT MOVE: what they do in the next 12 months, and the signal that would confirm it.
- CONFIDENCE: how much of this profile rests on hard evidence vs. inference. Be explicit.

Then produce:

COMPARATIVE TABLE
Rows = competitors (plus us). Columns = scale, growth, margin, price position, primary
segment, core capability, key vulnerability.

THE COMPETITOR WE ARE MISREADING
Which competitor is most likely misjudged by this organisation, in which direction
(over- or under-estimated), and what evidence suggests the misread.

WHAT WE DO NOT KNOW
The three intelligence gaps that most limit our ability to compete, and how each could be
closed legitimately — public sources, customer conversations, channel partners, former
employees within ethical and legal bounds.

Rules:
- Never state a competitor figure without a source and date. Estimates get labelled and ranged.
- Do not describe every competitor as a threat. Some are not.
- Nothing in the collection plan should involve misrepresentation, confidential information,
  or inducing anyone to breach an obligation.

MATERIAL:
[PASTE COMPETITOR DATA, FILINGS, PRICING, WIN/LOSS NOTES, OBSERVED MOVES]
```

## Output you should get

One evidence-graded profile per competitor, a comparison table, and a named misread.

## Quality bar

- **"Revealed strategy" must differ from their website.** If it does not, the model read the
  marketing and stopped.
- **Vulnerability must be structural,** not "they're expensive." Structural means they cannot
  easily fix it without breaking something else they depend on.
- **Check the confidence lines.** A profile that is 80% inference should be treated as a
  hypothesis list, not intelligence.

## Pairs with

- Follow with [18 Rival Move Map](18-rival-move-map.md) to model their reactions
- Follow with [41 War Gaming](../5-govern-value/41-war-gaming.md) before committing to a move
- Feed cost position into [22 Pricing Strategy](../3-choose-strategy/22-pricing-strategy.md)
