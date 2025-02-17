---
sidebar_position: 1
---

# Introduction

The Hyperobjects MacOS app is a tool to visualize structures with custom rendering techniques, specifically configured and designed to enhance our understanding of phenomena that we can describe as objects but which are otherwise less tangible.

"lenses" through which these objects can be made "visible":
- Sub/Super-structure hierarchies
- Views over time

Some scenes which this app contains:
- Lorenz Attractor
- Earth Satellites
- Universe of code

A core feature is detailed control over the rendering pipeline to mix realistic, evocative and illustrative drawing techniques for artistic & communicative effect.

## Documentation structure

Page tree and pages generally follow the same structure as the codebase itself, except for [*Concepts*](/docs/category/concepts).

At a high level the codebase is organized in three key segments:

- [*Models*](/docs/category/models) defines the core data structures for generating various scenes and geometries.

- [*Views*](/docs/category/views) contains the main Swift(UI) and render pipeline code that make up the app to display/manipulate the scenes and geometries.

- [*Data*](/docs/category/data) instantiates various scenes and defines specific geometry-generating classes used within the scenes. 


## Development states

Documentation describing concepts & envisioned functionality ideally precedes implementation. However implementation in turn triggers reflection and user experiences that inspire further functions. 

At a high level then, new functions and components in the software can be in a *Draft* descriptive state about to-be-implemented functionality. Or in an *Under construction* state, where a component is partially functioning but still elements of the component are to be further detailed out or still to-be implemented. 

Or a component is fully *Ready*, (for now...).

- Draft ✍️
- Under construction 🏗️
- Ready ✅


## Implementation

The entry point for the MacOS app itself is the [HyperobjectsApp](/docs/Hyperobjects%20App).