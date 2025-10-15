# [🏗️] enum: InputType

:::info

Initial implementation of `InputType` present, however the specifics of the different input types require further reflection.

:::

Enum which defines the type within [`SceneInput`](/docs/models/structs/SceneInput) and [`RenderConfiguration`](/docs/models/structs/RenderConfiguration) so that further data flow in both scene generation and render pipeline can be type specific.

InputType is used to harmonise input types for both the [scene inputs](/docs/models/classes/geometriesscenebase) and [render configurations](/docs/models/classes/renderconfigurations) and corresponding [controls](/docs/category/controls).

Currently defined input types:
- `bool`
- `string`
- `float`
- `integer`
- `vector2d`


## Input type details

**bool**

Simple boolean that can be either TRUE or FALSE. 


**string**

Provides some piece of text to be interpreted however by the scene or render pipeline.