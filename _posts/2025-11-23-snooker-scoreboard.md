---
title: "Snooker scoreboard"
date: 2025-11-23
permalink: snooker-scoreboard/ 
published: true
categories:
    - personal project
tags: ["snooker", "scoreboard", "dataviz"]
---

A problem with being a snooker spectator is keeping track of whether a player has enough of a lead to have won the frame. You need to calulate the difference between the players' scores, then compare that to the points remaining on the table. The points remaining calculation is: the number of reds multiplied by 8 (the score for a red = 1 and a black = 8), plus 27 for the colours, or the sum of the value of the remaining colours if there are no reds left. It's not hard, but it can be tedious and you need to redo it after every shot!

[This snoober scoreboard](https://smcateer.github.io/snooker-scoerboard/scorecard.html) provides a visual solution to the problem. It shows each player's score, as well as their total potential score (their current score plus the points remaining on the table). That way you can watch the score of the player at the table growing at the same time as seeing their opponent's potential score being eaten away.

I've watched a few matches using it to keep track of the scores, and I reckon it works pretty well for reducing the cognitive load and allowing you to just enjoy the match.

It's pretty scrappy, I'm sure it doesn't cover all corner cases, but is works as a proof of concept for the visualization. If you want to discuss it, I posted about it on [Reddit](https://www.reddit.com/r/snooker/comments/1p3mf5g/i_made_a_little_snooker_scoreboard/) - join the conversation there!
