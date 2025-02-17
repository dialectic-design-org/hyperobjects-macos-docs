# [🏗️] view: Viewport

2D viewport for rendering debug views of source and intermediary geometries.

Needs to be provided a `@EnvironmentObject` of class `GeoemtriesSceneBase` which internally is defined as `currentScene`.

From the scene the `cachedGeometries` is being read out and passed to invididual `GeometryElement` views placed within a `GeometryReader` view for positioning.

Further views:
- `GridView`
- `GestureHandlerView`
- 

## Viewport controls

The viewport facilitates *pinch-zoom* and *pan* gesture interactions to explore scene details.

Has buttons to reset the view.