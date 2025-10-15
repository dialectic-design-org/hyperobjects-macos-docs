# [🏗️] Draw loop

Using CAMetalDisplayLink the draw loop is decoulpled from the main application state.

We can think of the application in two threads:

- The main thread (used for general UI updates)
- The render thread (used for Metal Rendering)

This is done via two classes, the `MetalViewWrapper` and `MetalDisplayLinkDelegateHandler`.

The `MetalDisplayLinkDelegateHandler` conforms to `CAMetalDisplayLinkDelegate` by implementing the function `metalDisplayLink`. This function gets called whenever the display is ready for another draw call.

## State syncing

State can come from the inputs which are controlled via the main thread, but should be accessible to the render thread.

