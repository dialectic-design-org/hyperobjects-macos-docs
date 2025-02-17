# [✍️] class: SceneManager

:::info

To be implemented, to facilitate scene switching

:::

Example generated code:

```swift

class SceneManager: ObservableObject {
    @Published var currentScene: GeometriesSceneBase
    
    init(initialScene: GeometriesSceneBase) {
        self.currentScene = initialScene
    }
    
    func replaceScene(with newScene: GeometriesSceneBase) {
        self.currentScene = newScene
    }
}

// Modify your App to use SceneManager
@main
struct HyperobjectsMacOSApp: App {
    @StateObject private var sceneManager = SceneManager(initialScene: generateGeometrySceneCircle())
    
    var body: some Scene {
        WindowGroup {
            ContentView()
                .environmentObject(sceneManager.currentScene)
                .environmentObject(sceneManager)  // Pass the manager too
                .onAppear {
                    print("Content view appeared")
                    sceneManager.currentScene.setWrappedGeometries()
                }
        }

```