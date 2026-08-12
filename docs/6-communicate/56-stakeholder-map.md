# 56 · Stakeholder Map

**Phase:** 6 — Communicate · **Use when:** you need to see the political terrain before moving

## What it does

Maps power, interest, position, and relationships across everyone who affects or is affected
by a decision — including the influence that does not appear on the org chart. This is the
analysis that precedes any alignment plan.

## Inputs you need

- The decision or change in question
- The full list of people and groups involved or affected
- What you know about their interests, histories, and relationships
- Formal authority structures and known informal influence

## Prompt

```
You are mapping stakeholders for [DECISION / CHANGE] at [COMPANY].

Produce:

1. STAKEHOLDER INVENTORY
   Everyone who affects or is affected. Include: formal decision makers, budget holders,
   those who must implement, those affected operationally, informal influencers, external
   parties (customers, partners, regulators, investors, unions), and anyone whose
   cooperation is needed at any point in the sequence.

2. POWER AND INTEREST GRID
   Place each on power (ability to affect the outcome) and interest (how much they care).
   Give numeric positions and describe the four groups:
   - HIGH POWER, HIGH INTEREST: manage closely, engage first, involve in shaping
   - HIGH POWER, LOW INTEREST: keep satisfied; their interest can be activated by others,
     which is the main political risk on this axis
   - LOW POWER, HIGH INTEREST: keep informed; they often supply the arguments others use
   - LOW POWER, LOW INTEREST: monitor
   Note that power here includes the power to slow, block, or quietly fail to implement,
   which is distributed far more widely than the power to decide.

3. POSITION AND MOVEMENT
   Table: stakeholder | current position (champion → opposed) | position needed for this to
   succeed | gap | how movable | what would move them | what would harden them against it.
   Distinguish the position needed to decide from the position needed to implement — a
   decision can pass with people who will not deliver.

4. RELATIONSHIP MAP
   Who influences whom. Identify: coalitions, mentor relationships, historical alliances and
   grudges, whose endorsement carries disproportionate weight, and who is the real
   gatekeeper for each decision maker. Note where influence runs opposite to hierarchy.

5. INTERESTS BENEATH POSITIONS
   For each significant stakeholder, separate the position they state from the interest
   underneath it. Positions conflict; interests often do not, which is where agreement is
   found. Where interests genuinely conflict, say so — some conflicts are real and must be
   decided rather than reconciled.

6. THE CRITICAL FEW
   Name the three to five people who determine whether this happens. For each: current
   stance, what they need, who influences them, and who should approach them.

7. THE OVERLOOKED
   Who is affected but has no voice in the process? They frequently determine implementation
   success, and their absence from the process is the standard cause of resistance later.
   Name them and how to include them.

8. RISKS IN THE MAP
   - A high-power stakeholder whose interest could be activated against this
   - A coalition that could form in opposition
   - A single point of failure: one person whose departure or objection stops everything
   - Someone whose support is assumed but not confirmed

Rules:
- Include people who can slow or quietly sabotage, not only those who can formally decide.
- Base positions on evidence — what people have said and done — and mark inference clearly.
- Do not treat stakeholders as obstacles. Their interests are real and some of their
  objections are correct.

MATERIAL:
[PASTE DECISION, PEOPLE INVOLVED, WHAT YOU KNOW OF THEIR INTERESTS AND RELATIONSHIPS]
```

## Output you should get

A full inventory including informal influence, a positioned grid, position-vs-needed gaps
separated for decision and implementation, a relationship map, interests beneath positions,
and a named critical few.

## Quality bar

- **Section 5 is where deals become possible.** Conflicting positions with compatible
  interests are solvable; the map has to show which is which.
- **Section 7 predicts implementation resistance** more reliably than any other section.
- **Reject** a map limited to the org chart. Real influence rarely follows it.

## Pairs with

- Follow with [51 Stakeholder Alignment](51-stakeholder-alignment.md) to build the plan
- Follow with [38 Communication Plan](../4-build-execution/38-communication-plan.md)
- Follow with [30 Decision Rights](../3-choose-strategy/30-decision-rights.md) if authority is unclear
