---
sidebar_position: 3
---
# [🏗️] Windows

# Description

File that describes all the windows which are available in the application.

The [`WindowInfo`](/docs/models/structs/WindowInfo) struct is used to provide a standardized description of windows. Each window does individually need to be defined again in the [HyperobjectsMacOSApp](/docs/Hyperobjects%20App) definition.

# Primary window

The primary window which is configured in [`Hyperobjects App`](/docs/Hyperobjects%20App) is an instance of [`RenderView`](/docs/views/RenderView). As primary window it can enter native full-screen mode out-of-the-box.

# Secondary windows

Currently configured windows:
- [Windows Manager](/docs/views/WindowsManagerView)
- [Secondary Render View](/docs/views/RenderView)
- [Scene Inputs](/docs/views/SceneInputsView)
- [Render Configurations](/docs/views/RenderConfigurationsView)
- [Scene Geometries List](/docs/views/GeometriesListView)
- [Viewport views [x, y, z]](/docs/views/Viewport)
- [Scene Selector](/docs/views/SceneSelectorView)
