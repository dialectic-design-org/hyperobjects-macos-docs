# [🏗️] view: RenderView

View which contains the core visualization pipeline.

Renders the defined geometries in the currently selected scene using Metal according to the specified render pipeline and parameters.

The `Renderview` struct conforms to `NSViewRepresentable` protocol. Creates and returns an `MTKView` on the `makeNSView` function. Defines a Coordinator class within the struct which follows the `MTKViewDelegate` and returns this on the `makeCoordinator` function.

## Initialization sequence

By placing the RenderView in a SwiftUI view hierarchy, the following initialization sequence will be called.

1. Renderview.makeCoordinator()
2. Coordinator.init()
3. RenderView.makeNSView(context: Context)
    1. *context.coordinator.setup(device: device)*

The context in step 3 is the RenderView itself, which at that point has an initialized coordinator.

In makeNSView, we initialize the MTKView and a metal device ourselves, which we then pass on to the coordinator to further initialize the render pipeline.

## Coordinator

Upon initialization the `Coordinator` is passed the parent view and then calls initialization on the parent via a `super.init()`.

In the coordinator, the buffers towards the shader code are defined.


### Coordinator.setup(device: device)

Initializes the render pipeline and buffers containing the scene data.


### Coordinator.draw()

Updates buffers for (re)drawing the scene.