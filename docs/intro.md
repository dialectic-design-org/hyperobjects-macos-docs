---
sidebar_position: 0
---

# Introduction

The Hyperobjects MacOS app provides a live visualisation toolkit. It can be used to construct dynamic, interactive experiences with a mixture of pre-compiled scenes and live coding. The toolkit has mainly been conceived within the design & artistic practices of [Erwin Hoogerwoord](https://erwinhoogerwoord.nl). This implementation purposefully targets the capabilities of the MacOS platform & Apple tech stack. Making it publicly available is mainly done with the purpose of inspiring other implementations and tooling developments. 

This documentation website describes the design and implemenation of this toolkit.

Code for the toolkit can be found at:

[https://github.com/dialectic-design-org/HyperobjectsMacOS](https://github.com/dialectic-design-org/HyperobjectsMacOS)

Code for this documentation website can be found at:

[https://github.com/dialectic-design-org/hyperobjects-macos-docs](https://github.com/dialectic-design-org/hyperobjects-macos-docs)


## Toolkit

Hyperobjects MacOS is constructed as a toolkit for visual synthesis. The toolkit provides various methods to create dynamic, real-time visual experiences with configurable rendering techniques. It is developed as part of a broader initiative to investigate and evolve how people's interactions with each other and their increasingly technological environments.


## Hyperobjects

The toolkit derives its name from concept of *Hyperobjects* as defined by Timothy Morton. Very roughly summarised, the term *Hyperobjects* points to the direction of entities which exceed the capacities of ordinary human object perception.

Building on the theory that cognition is [embodied](https://plato.stanford.edu/entries/embodied-cognition/), the tools in this toolkit are designed to create visual experiences which are in a live feedback loop with direct human action. The algorithms producing visual experiences conceptually extend the cognitive system to perceive more and different objects, entities and phenomena.

## Visual synthesis

Core to this toolkit is a real-time rendering pipeline which revolves around 3d-defined paths as central data structure as opposed to polygons in a traditional fragment shader pipeline. The rendering pipeline allows for fine-grained control over how 3d-defined paths appear in screen space, with among other things, for example screen-space consistent control over line width. This rendering capability allows for precise artistic and design choices in the translation of the hyperspace as defined in algorithms and 3D+ data structures to perceivable visual elements in the "flat" 2D embodiment of pixels in screens, projectors or prints.

Further functionalities are audio-reactivity and live coding to generate and manipulate geometries, parameters and algorithms in the visual synthesis in real time, enabling real-time exploration of dimensionality, chaotic spaces and live ideation.

The visual synthesis pipeline is described in more detail in the dedicated concept page on [*Visual Synthesis*](/docs/concepts/VisualSynthesis.md).

See [Socratism.io](https://socratism.io) for an impression of visual experiences created with this toolkit.

## Tech stack

The concepts surrounding and expressed within this toolkit could be implemented in more or less open tech stacks. For this implementation, the choice was made to embrace the integrated compute capabilities of the MacOS platform. Getting as close to bare metal as possible via the [Apple Metal framework](https://en.wikipedia.org/wiki/Metal_(API)). This framework provides low-level tooling with direct control over M-series GPU data flows and kernel code execution. This is further combined with other MacOS operating system frameworks such as the AVFAudio framework, CoreMidi frameworks and SwiftUI for OS-native interface controls. To tie these frameworks together in a readable and performant manner, the application is developed in the Apple-developed open-source programming language [Swift](https://en.wikipedia.org/wiki/Swift_(programming_language)), using largely Xcode as the IDE and tooling to compile the software. 

The choice for MacOS platform was based on prioritizing performance and ease of development over openness of the tech stack.

Defining visual synthesis performance along the folowing parameters:
- Complexity of (real-time) algorithms
- Amount of visual elements
- Resolution
- Frame-rate
- Responsiveness to inputs (controls, audio etc)

The trade-off is this specific implementation of the concepts can only run on the MacOS platform. However with the source code available, it can serve as reference for implementations in other tech stacks.
