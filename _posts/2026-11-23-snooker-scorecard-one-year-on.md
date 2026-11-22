---
title: "Snooker scorecard one year on"
date: 2026-11-23
permalink: snooker-scorecard-one-year-on/
published: true
categories:
  - personal project
tags:
  - snooker
  - scoreboard
  - dataviz
---

A year ago I [put together a snooker scoreboard]({{ '/snooker-scoreboard/' | relative_url }}) to save myself the mental arithmetic of working out when a player needs snookers. It was a proof of concept, and looked like one.

I've just given it a fairly thorough overhaul. The two separate bars have become one, starting at 147 points and being eaten away from either end as the players score. The threshold for winning stays in the centre. There's a nice wrinkle after a red is potted: the opponent's potential score drops, but the player at the table still has a chance at another seven points. The new graphic shows those *not quite scored* points as a hatched extension.

It now keeps track of who's at the table, what's on, fouls, free balls and the final colours. The whole thing is still unashamedly vibe-coded—Copilot for the original, ChatGPT for the rebuild—but this time I've also put the logic through an automated browser test suite.

[Try the updated scoreboard](https://smcateer.github.io/snooker-scoerboard/scorecard.html) or [have a look at the code and tests](https://github.com/smcateer/snooker-scoerboard).
