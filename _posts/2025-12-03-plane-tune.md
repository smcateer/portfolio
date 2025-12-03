---
title: "Plane tune"
date: 2025-12-03
permalink: plane-tune/
published: true
categories:
    - personal project
tags:
    - sonification
    - audio synthesis
---

Concept: this project explores a novel sonification technique that combines:

1. **Parametric Path** - A 2D curve defined as a function of time `t`, producing coordinates `(x(t), y(t))`
2. **Scalar Field** - A mathematical function that maps any 2D point `(x, y)`, to a scalar value `f(x, y)`
3. **Waveform Generation** - Sampling the field values along the path to create audio

As the path moves through the field over time, the varying field values become the audio waveform. Think of a record needle moving along a path you choose across an arbitrary landscape that you define mathematically.

For details see [the GitHub repo](https://github.com/smcateer/plane_tune).
