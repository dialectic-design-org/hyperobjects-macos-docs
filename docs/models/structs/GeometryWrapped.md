# [✅] struct: GeometryWrapper

:::tip

Basic implementation ready. Can in the future be extended with more helper functions.

:::

A struct for which one of the properties is the geometry property, can by *any* [Geometry](../protocols/Geometry). The GeometryWrapper struct is used in places where the Swift type system needs an explicit type, whereas in many places in the data model ```any Geometry``` is defined.