---
sidebar_position: 2
---
# [✅] App: HyperobjectsMacOS App

:::info

Initial config done, to be continuously developed with further application functionalities.

:::

---

# Description

The HyperobjectsMacOSApp struct is the main entry point that defines the application itself leveraging the SwiftUI Framework.

It conforms to the [App](https://developer.apple.com/documentation/swiftui/app) protocol, implementing the `body` property to present a `Scene` with the various windows of the application.

Currently it serves only two functions:
- Maintain state
- Present windows

## State

A `@StateObject` maintains one central instance of [`SceneManager`](/docs/models/classes/SceneManager), to present the scene in the various windows of the application.

A `@StateObject` maintains an instance of [`RenderConfigurations`](/docs/models/classes/RenderConfigurations), which provides specific state which informs the renderer how to draw the picture.


## View configuration

The HyperobjectsMacOSApp struct provides a body view whichs defines the main `WindowGroup` and a `Window` for each window as configured. See the documentation on [windows](/docs/windows) for further details.

