# 60 · Next Steps

**Phase:** 6 — Communicate · **Use when:** the meeting is ending and the work must not stall

## What it does

Closes a decision with commitments that are owned, dated, and unambiguous — and separates
what was actually decided from what was merely discussed. Most decisions decay in the week
after the meeting, when nobody is quite sure what was agreed.

## Inputs you need

- What was decided, and by whom
- What was discussed but not resolved
- Who was in the room and what they committed to
- The next decision point and when it occurs

## Prompt

```
You are closing out [MEETING / DECISION] at [COMPANY].

Produce:

1. WHAT WAS DECIDED
   Each decision in one sentence, stating who decided it and when it takes effect. Only
   items genuinely decided — the discipline of this section is that it is short.

2. WHAT WAS NOT DECIDED
   Items discussed but left open, why they are open (missing information, disagreement,
   requires someone absent, or deliberately deferred), what would close each, who owns
   getting it closed, and by when.
   Being explicit here prevents the common failure where everyone leaves with a different
   belief about what was settled.

3. ACTIONS
   Table: # | action (starts with a verb, specific enough to be verifiably done or not
   done) | owner (one named person, not a team) | due date (a date, not "Q3") | what
   "done" looks like | who it must be reported to.
   Test each action: could two people disagree about whether it was completed? If yes,
   rewrite it.

4. THE FIRST WEEK
   What happens in the next seven days, specifically. Momentum is established or lost here.
   If nothing happens in week one, the decision is already weaker than it was in the room.

5. DEPENDENCIES AND SEQUENCE
   Which actions must complete before others start, and which are on the critical path to
   the next decision point. Flag any action whose delay blocks several others.

6. COMMUNICATION
   Who needs to know what was decided, by when, from whom, in what form. Include anyone
   affected who was not in the room — they should not learn of it informally.

7. THE NEXT CHECKPOINT
   When this comes back: date, forum, what will be reviewed, what evidence must be
   available, and who prepares it. Set it now, in the room, not later by email.

8. WHAT COULD STALL THIS
   The two or three things most likely to prevent these actions from happening: an owner
   with no capacity, a dependency outside our control, an absent approval, or competing
   priorities. For each: the mitigation and who watches for it.

9. THE DECISION RECORD
   A short, durable record for the file: what was decided, by whom, on what date, on what
   basis, what alternatives were rejected and why, and what would trigger a revisit. This
   is what prevents the decision being relitigated in three months by people reconstructing
   it from memory.

Rules:
- Every action has one named owner. Shared ownership means no ownership.
- Every action has a specific date.
- No action phrased as "consider", "explore", "look into", or "align on" unless the
  deliverable of that exploration is specified with a date.
- Distinguish decided from discussed, rigorously.

MATERIAL:
[PASTE MEETING OUTCOMES, ATTENDEES, OPEN ITEMS, NEXT DECISION POINT]
```

## Output you should get

A short decided list, an explicit not-decided list with owners for closure, verifiable actions
with single owners and dates, a first-week plan, a set next checkpoint, and a durable decision
record.

## Quality bar

- **Section 2 prevents the most common post-meeting failure** — divergent beliefs about what
  was agreed.
- **Section 9 is what stops relitigation.** Recording the rejected alternatives and the
  revisit trigger is the part people skip and later need.
- **Reject** any action containing "explore" or "align on" without a dated deliverable.

## Pairs with

- Precede with [53 Decision Memo](53-decision-memo.md)
- Follow with [40 Execution Cadence](../4-build-execution/40-execution-cadence.md) to place the checkpoint
- Follow with [35 Accountability Map](../4-build-execution/35-accountability-map.md) if ownership is contested
