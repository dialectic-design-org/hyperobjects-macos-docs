# [✅] struct: WindowInfo

:::note

Implementation sufficient for current usage.

:::

# Description

Struct to describe various windows in the application. Used in file [Windows](/docs/Windows) to further specify the individual windows of the [HyperobjectsMacOS](/docs/Hyperobjects%20App) app.

```swift
struct WindowInfo: Identifiable {
    let id: String
    let title: String
    let showOnLoad: Bool
    let content: AnyView
}
```