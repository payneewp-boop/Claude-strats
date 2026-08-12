# 13 · Customer Segmentation

**Phase:** 2 — Map Markets · **Use when:** you are treating a heterogeneous market as one thing

## What it does

Cuts the market by what actually drives buying behaviour — needs, jobs to be done, willingness
to pay, cost to serve — rather than by the demographic or industry categories that are merely
easy to collect. A good segmentation changes what you build, price, and sell to whom.

## Inputs you need

- Customer-level data: revenue, margin, tenure, products held, service costs
- Purchase behaviour: frequency, channel, decision process, who signs
- Any voice-of-customer material: interviews, surveys, support tickets, win/loss
- Cost-to-serve data if you have it — this is where most segmentations go wrong by omission

## Prompt

```
You are building a needs-based segmentation of [MARKET / CUSTOMER BASE] for [COMPANY].

Reject demographic or firmographic segmentation unless the data proves those attributes
predict behaviour. Segment by what makes customers buy differently.

Produce:

1. SEGMENTATION LOGIC
   State the variables you are segmenting on and why each predicts behaviour. Candidate
   variables: job to be done, trigger for purchase, decision criteria and their weights,
   willingness to pay, price sensitivity, cost to serve, channel preference, buying process
   complexity, switching cost, usage intensity.
   Explicitly state which variables you rejected and why.

2. SEGMENTS
   Define 4–7 segments. For each:
   - NAME: descriptive of behaviour, not of demographics ("deadline-driven replacers", not
     "mid-market manufacturers")
   - SIZE: number of customers and revenue, absolute and % of total
   - THE JOB: what they are actually hiring the product to do
   - DECISION CRITERIA: ranked, with rough weights
   - WILLINGNESS TO PAY: relative to average, with the evidence
   - COST TO SERVE: relative to average, with the evidence
   - RESULTING MARGIN: WTP minus cost to serve — state which segments are actually
     profitable and which are subsidised by others
   - CURRENT PENETRATION: our share of this segment vs. our overall share
   - WHO ELSE SERVES THEM WELL: the competitor best positioned here
   - HOW TO REACH THEM: channel and message that works for this segment specifically

3. SEGMENT SIZE VS. PROFIT
   Table ranking segments by revenue and separately by contribution. Highlight where the
   two rankings disagree — the largest segment is frequently not the best one.

4. THE MISERVED SEGMENT
   Which segment is currently served by a product built for a different segment? What are
   they compromising on, and what would a purpose-built offer for them look like?

5. SEGMENTS TO EXIT
   Which segments cost more to serve than they contribute, once fully loaded? State the
   revenue that would be lost and the cost that would be released.

6. TEST OF VALIDITY
   For this segmentation to be real, members of a segment must behave more like each other
   than like members of other segments. State how you would verify that with data, and flag
   any segment you suspect would fail that test.

Rules:
- Segments must be identifiable in advance — if you cannot tell which segment a prospect
  belongs to before selling to them, the segmentation cannot be operationalised. Flag any
  segment with this problem.
- Cost to serve is mandatory. A segmentation without it optimises for revenue and destroys margin.
- Do not produce segments of wildly unequal size unless the data demands it.

MATERIAL:
[PASTE CUSTOMER DATA, BEHAVIOUR, VOC MATERIAL, COST-TO-SERVE DATA]
```

## Output you should get

4–7 behaviourally defined segments with size, WTP, cost to serve, and resulting margin —
plus an explicit revenue-vs-profit ranking disagreement.

## Quality bar

- **If every segment is profitable, the cost allocation is wrong.** Real customer bases
  almost always contain a value-destroying segment.
- **Segment names should be verbs and situations,** not categories.
- **Apply the section 6 test seriously.** Most corporate segmentations fail it and survive
  anyway because nobody checks.

## Pairs with

- Follow with [19 Segment Priorities](19-segment-priorities.md) to rank them
- Follow with [22 Pricing Strategy](../3-choose-strategy/22-pricing-strategy.md) to price by segment
- Feed section 5 into [24 Portfolio Review](../3-choose-strategy/24-portfolio-review.md)
