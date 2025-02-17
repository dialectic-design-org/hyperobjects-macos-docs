# [🏗️] class: GeometriesSceneBase

:::info

Initial functioning implementation of `GeometriesSceneBase` done and in use. To be further specified and extended as the actual rendering pipeline takes shape.

:::

---

# Description

*GeometriesSceneBase* data model defines the abstract class where a number of inputs feed some kind(s) of geometry generator functions, resulting in output geometries. It implements a caching mechanism, to only recalculate geometry generators for which input dependencies have changed.

```swift

protocol Scene: Identifiable {
    var id: UUID { get }
    var name: String { get }
    var inputs: [SceneInput] { get set }
    func generateGeometry() -> [Geometry]
}

```

TODO: Rewrite/include the following functionalities

class which can be instantiated as a StateObject to store the data of a scene.

Contains the following properties:
- paths: [Path] - an array of Path objects
- selectedPathIndex: Int? - the index of the selected path in the paths array
- selectedPath: Path? - the selected path object
- selectedSegmentIndex: Int? - the index of the selected segment in the selected path
- selectedSegment: PathSegment? - the selected segment object
- camera: Camera - the camera object