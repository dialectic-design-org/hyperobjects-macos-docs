---
sidebar_position: 1
---

# Documentation

This website contains the conceptual, functional and technical description of the toolkit.

## Documentation structure

This toolkit is being built around certain [*Concepts*](/docs/category/concepts). These form the basis for design goals and design decisions.

The rest of the documentation is largely technically oriented towards defining the different capabilities and implementations.

At a high level the codebase is organized in three key segments:

- [*Models*](/docs/category/models) defines the core data structures for generating various scenes and geometries.

- [*Utils*](/docs/category/utils) defines various utility functions in support of models and views.

- [*Views*](/docs/category/views) contains the main Swift(UI) and render pipeline code that make up the app to display/manipulate the scenes and geometries.

- [*Data*](/docs/category/data) instantiates various scenes and defines specific geometry-generating classes used within the scenes. 


## Development states

Documentation describing concepts & envisioned functionality ideally precedes implementation. However implementation in turn triggers reflection and user experiences that inspire further functions. 

New functions and components in the software can be in a *Draft* descriptive state about to-be-implemented functionality. Or in an *Under construction* state, where a component is partially functioning but still elements of the component are to be further detailed out or still to-be implemented. Or a component is fully *Ready*, (for now...).

Implementation might move ahead of documentation when the inspiration hits.

- Draft ✍️
- Under construction 🏗️
- Ready ✅


## Implementation

The entry point for the MacOS app itself is the [HyperobjectsApp](/docs/Hyperobjects%20App).