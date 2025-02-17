# [🏗️] view: WindowManagerView

Has controls to open and close the various windows in the app.

The available windows in the app are defined via a central constants array.

The WindowManagerView is a SwiftUI view which contains a list of buttons, each of which opens or closes a window.

The WindowManagerView is a singleton object which is instantiated in the main app view.

```swift

import SwiftUI

struct WindowManagerView: View {
    @StateObject var sceneData: SceneData
    @StateObject var windowManager: WindowManager

    var body: some View {
        HStack {
            ForEach(windowManager.windows) { window in
                Button(action: {
                    windowManager.toggleWindow(window)
                }) {
                    Text(window.name)
                }
            }
        }
    }
}

```

## Implementation

```swift

import Foundation

class WindowManager: ObservableObject {
    static let shared = WindowManager()
    
    @Published var windows: [Window] = []
    
    init() {
        windows = [
            Window(name: "Scene List", view: AnyView(SceneListView())),
            Window(name: "Path List", view: AnyView(PathListView())),
            Window(name: "Path Editor", view: AnyView(PathEditorView())),
            Window(name: "Path Segment Editor", view: AnyView(PathSegmentEditorView())),
            Window(name: "Camera Editor", view: AnyView(CameraEditorView())),
            Window(name: "Rendering Options", view: AnyView(RenderingOptionsView())),
            Window(name: "Video Recorder", view: AnyView(VideoRecorderView())),
        ]
    }
    
    func toggleWindow(_ window: Window) {
        if let index = windows.firstIndex(where: { $0.name == window.name }) {
            windows[index].isOpen.toggle()
        }
    }
}

```

