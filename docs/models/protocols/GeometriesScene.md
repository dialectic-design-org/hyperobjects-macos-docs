# [🏗️] protocol: GeometriesScene

Protocol for the class [`GeometriesSceneBase`](../classes/GeometriesSceneBase).

```swift
protocol GeometriesScene: Identifiable, ObservableObject {
    var id: UUID { get }
    var name: String { get }
    var inputs: [SceneInput] { get set }
    var geometryGenerators: [any GeometryGenerator] { get set }
    var changedInputs: Set<String> { get set }
    var cachedGeometries: [GeometryWrapped] { get set }
    
    func updateInput(name: String, value: Any)
    func updatePythonCode(for generatorId: UUID, newCode: String)
    func generateAllGeometries() -> [any Geometry]
}
```

Functions implemented within [the class](../classes/GeometriesSceneBase) itself.

## updateInput

Updates the value for one of the inputs.

## updatePythonCode

Updates the python code.