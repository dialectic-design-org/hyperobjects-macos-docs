# [🏗️] protocol: GeometryGenerator

Protocol to which various geometry generator classes should conform.

Has a generic generateGeometries function which can contain any Swift code and can optionally implement calling of python code.

```swift

protocol GeometryGenerator: Identifiable, ObservableObject {
    var id: UUID { get }
    var name: String { get }
    var inputDependencies: [String] { get }
    var pythonCode: String { get set }
    
    func generateGeometries(inputs: [String: Any]) -> [Geometry]
    func needsRecalculation(changedInputs: Set<String>) -> Bool
}

```

