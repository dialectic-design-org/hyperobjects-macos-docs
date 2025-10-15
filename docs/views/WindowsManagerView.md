# [✅] view: WindowsManagerView

:::info

Basic version done for opening the different windows.

:::

WindowsManagerView provides controls to open and close the various windows in the app.

The [available windows](/docs/windows) in the app are defined via central constants.

## Implementation

```swift

struct WindowsManagerView: View {
    @Environment(\.openWindow) private var openWindow
    var body: some View {
        VStack {
            List(allWindows) { window in
                HStack {
                    Text(window.title).font(myFont)
                    Spacer()
                    Button("Open") {
                        openWindow(id: window.id)
                    }.font(myFont)
                }
            }
        }
    }
}

```

