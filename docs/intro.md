---
sidebar_position: 1
---

# Introduction

The Hyperobjects MacOS app is a tool created as part of a broader initiative to investigate and evolve how we as people interact with each other and our increasingly technological environment. The tool provides various methods to dynamically create visuals with custom rendering techniques. We can see ourselves and our environment as continuums as well as objects. There are distinct and connected phenomena.  Hyperobjects as defined by Timothy Morton very roughly summarised points to the direction of (super-)structures we can conceptuallly define but which are otherwise less tangible. This term is used to describe the tool to indicate the general direction in which 

To achieve this, a key enabler is detailed control over the rendering pipeline to mix realistic, evocative and illustrative drawing techniques that can blend distinct and continuous features. Further functionalities are audio-reactivity and live coding to manipulate visual aspects in real time, further extending the possibility to experience and explore the ephemeral and 'hyper' aspects of our experiences.


## Tech stack

This implementation of the tooling is developed specifically for the MacOS platform. Another implementation variation of the tooling might be possible on a more open cross-platform tech stack as well, however for this implementation the choice was to lean into a specific platform to maximise the hardware performance for increased visual effect. In this implementation that means heavy use of the Apple Metal framework which are optimised to make use of M-series chips but also further operating system frameworks such as the AVFAudio framework, CoreMidi frameworks and SwiftUI for OS-native interface controls. To tie these frameworks together in a readable and performant manner, the application is developed in the apple-initiated programming language Swift using largely XCode as the IDE. 

Visual effect deserves to be defined. In technological, practical terms there are some inputs:
- Complexity of (real-time) algorithms
- Amount of visual elements
- Resolution
- Frame-rate
- Responsiveness to inputs (controls, audio etc)



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