---
sidebar_position: 2
---
# [🏗️] Drawing techniques

The final drawn picture comes together via drawing techniques which come together via integration across models, views and Apple Metal render code.

The goals of combining different drawing techniques is to be able to control, per element:
- realism
- legibility
- expressiveness



## Techniques

Define geometries such as lines, curves, surfaces, volumes and text within a scene.

Per geometry, define the drawing technique.

Drawing techniques:

- Screenspace line/curve
- Tube line/curve



## Screenspace line & curve drawing

Define lines and curves in a Metal Ray Tracing Acceleration Structure with curve primitives.

Use a compute shader to define the nearest intersections from the camera with the relevant lines and curves.

Use custom functions to then define the closest points on both ray and curve.
Project these points into screenspace. 