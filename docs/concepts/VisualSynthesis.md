---
sidebar_position: 2
---
# [🏗️] Visual Synthesis

The Hyperobjects MacOS app provides a toolkit for visual synthesis.

The final drawn picture comes together via drawing techniques which come together via integration across models, views and Apple Metal render code.

In creating visual experiences the are a variety of artistic and design choices to be made, a very much non-exhaustive list of visual qualities you might want to steer towards could be:

- realism
- legibility
- expressiveness

Further choices can be how much you want specific consistent geometries to be present or non-present in the experience.

The visual synthesis pipeline as defined in this app revolves around defining 3-dimensional path geometries and controlling how these are rendered, or better said, using these geometries as further material for a compute pipeline that generates 2-dimensional textures which can be shown on screens, projected on walls, printed or otherwise further manipulated and fed into other systems and artistic workflows.


## Techniques

Define geometries such as lines, curves, surfaces, volumes and text within a scene.

Per geometry, define the drawing technique.

Drawing techniques:

- Screenspace line/curve
- Tube line/curve



## Screenspace 3D line & curve drawing

Define lines and curves in 3d space together with line with parameters at the end points.

A first compute shader projects all the line and curve control points to screen space.

The screen is divided in bins, for each line, it is added to the bins which it covers. This includes not just a line intersection but also the coverage based on line width. This happens in the same compute shader which transforms the lines.

A second compute shader then runs per pixel. Each pixel is located within a bin. It first calculates a sort order for each path within the bin. Then it iterates front to back over the lines, adding color.

### Transform and bin
Description of the transform and bin shader.
At a high level it performs two steps.

Step 1: It calculates the lines screen space position based on world space.

Step 2: It adds the line to any relevant bin in screen space.

The adding to the bins implicitly makes the line available for drawing. If it is not added to any bins, it will not be drawn.

**1. Culling**
Early return based on various selection parameters to not do expensive calculations if the line is (likely) not going to result in any visual artefacts at all.


**2. World space to screen space map**
Apply the MVP matrix to calculate clip space vector. From there scale xy with w parameter to 2d vectors.
Add depth and inverted w for future layering steps.

Screen space parameters are stored as separate parameters on the same structs. Making both world space and screen space values accessible in further shader calculations.

**3. Calculate screen-space bounding box**
Screen-space bounding box values are calculated once for various future steps.


**4. Early reject if line is outside of screenspace**
If line is not in screenspace reset the line.


**5. Build LUTs**
For more efficient distance calculation, build a Look-Up Table of linear segments to interpolate, instead of doing full bezier distance derivation at the fragment calculation.

Performance impact: Scales with number of lines.

Optimization possibility: Ensure the look-up table is simplified for more basic curves using various heuristics.

**6. Binning**
Identify the bins the line is a part of.
Iterate over the bounding box grid and add the line to all bins it covers.





### drawLines

**1. Extract initial parameters for the pixel**
pixel location, bins, viewsize

Initialize local index based on MAX_PER_BIN parameter.

Performance impact: Bin depth directly makes compute per pixel increase.

**2. Select relevant lines**
Iterate over lines marked for the bin.
Calculate screen-space distance to identify to identify time on curve.
Then use time on curve to calculate depth at t for the pixel.

If depth for line is closer than farthest line, add to local index.

**3. Count lines in local index**
Value used for debug visualisation.

