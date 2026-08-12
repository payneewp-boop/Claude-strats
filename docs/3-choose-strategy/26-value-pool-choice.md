# 26 · Value Pool Choice

**Phase:** 3 — Choose Strategy · **Use when:** you must commit to where you will capture value

## What it does

Converts profit pool analysis into a commitment: which pool of value this company will go
after, why it can capture value there, and what it will stop competing for. This is the
"where to play" decision made explicit and defensible.

## Inputs you need

- Profit pool map ([14 Profit Pool Analysis](../2-map-markets/14-profit-pool-analysis.md))
- Attractiveness map ([20](../2-map-markets/20-attractiveness-map.md))
- Your capabilities and assets, honestly assessed
- Capital available and time horizon

## Prompt

```
You are choosing which value pool [COMPANY] will compete to capture.

Produce:

1. THE POOLS ON THE TABLE
   For each candidate pool: size today, size in 5 years on current trends, current
   occupants, their margins, and the structural reason value accumulates there rather
   than elsewhere in the chain.
   The last point is the critical one. If you cannot state why value sits in a pool, you
   cannot judge whether it will stay.

2. CAPTURE MECHANISM
   For each pool, what allows a player to capture value there rather than compete it away:
   scale economics, network effects, switching costs, regulatory position, proprietary
   asset, brand, distribution control, data advantage, talent density, or cost position.
   Then state which mechanisms we have, could build, or could never build.

3. OUR RIGHT TO WIN, POOL BY POOL
   Table: pool | capture mechanism required | do we have it | if not, cost and time to
   build or buy it | who would resist our entry | realistic share we could hold in 5 years
   | resulting profit to us.
   Be strict. Adjacency on a value-chain diagram is not capability.

4. THE CHOICE
   Recommend one primary pool, and at most one secondary. State the logic in a paragraph
   that a board member could repeat accurately.

5. WHAT WE STOP COMPETING FOR
   Name the pools we are explicitly not pursuing, and what that means concretely: which
   products we stop developing, which customers we stop chasing, which capabilities we let
   go, which revenue we accept losing. Put a number on the revenue we walk away from.

6. DEFENSIBILITY OVER TIME
   For the chosen pool: what erodes value capture there over the next 5–10 years, who else
   is moving in, and what we would need to keep building to hold position. State honestly
   whether this pool is defensible or merely currently profitable.

7. THE MIGRATION RISK
   If value migrates out of our chosen pool, where does it go, what is the earliest signal,
   and what is our route to follow it? A pool choice without a migration answer is a bet
   on stasis.

8. THE CASE AGAINST THIS CHOICE
   The strongest argument for choosing a different pool, stated fairly, and what evidence
   would make that argument win.

Rules:
- Do not choose a pool merely because it is large. Large pools with no capture mechanism
  available to us are traps.
- Quantify what we give up in section 5. A pool choice with no forgone revenue is not a choice.
- Distinguish "we could enter" from "we could capture value" — these differ, and the second
  is the one that matters.

MATERIAL:
[PASTE PROFIT POOL MAP, ATTRACTIVENESS ANALYSIS, OUR CAPABILITIES, CAPITAL AVAILABLE]
```

## Output you should get

A pool-by-pool capture-mechanism assessment, one recommended pool with a repeatable logic,
a quantified statement of what is being abandoned, and a migration answer.

## Quality bar

- **Section 2 is what separates this from wishful thinking.** No capture mechanism means the
  pool's profits will be competed away, whoever enters.
- **Section 5 needs a revenue number.** Without one, nothing has been decided.
- **Section 8 should be genuinely uncomfortable.** If the counter-case is weak, ask for a
  stronger one.

## Pairs with

- Precede with [14 Profit Pool Analysis](../2-map-markets/14-profit-pool-analysis.md)
- Follow with [31 Operating Model Design](../4-build-execution/31-operating-model-design.md)
- Follow with [52 Narrative Builder](../6-communicate/52-narrative-builder.md)
