---
title: "The tennis racquet theorem"
date: 2026-11-22
permalink: tennis-raquet/
published: true
categories:
  - personal project
tags:
  - physics
  - simulation
  - procedural art
---

Just a monolith spinning in space.

The simulation integrates Euler's rigid-body equations for a torque-free rigid cuboid using fourth-order Runge–Kutta (RK4), with quaternions tracking the cuboid's orientation.

<div style="width:100%; aspect-ratio:4/3;">
  <iframe
    src="{{ '/assets/monolith/' | relative_url }}"
    style="width:100%; height:100%; border:0;"
    title="Tennis racquet theorem simulation"
    loading="lazy"
    allowfullscreen>
  </iframe>
</div>

[View the source code on GitHub](https://github.com/smcateer/procedural-art/tree/main/sketches/monolith)
