---
sidebar_position: 2
---
# [🏗️] App: HyperobjectsMacOS App

:::info

Initial config done, to be continuously developed with further application functionalities.

:::

---

# Description

The HyperobjectsMacOSApp struct is the main entry point that defines the application itself leveraging the SwiftUI Framework.

It conforms to the [App](https://developer.apple.com/documentation/swiftui/app) protocol, implementing the `body` property to present a `Scene` with the various windows of the application.

A `@StateObject` is used to maintain one central instance of `SceneManager`, to present the scene in the various windows of the application.

The SceneManager takes as

## Window configs