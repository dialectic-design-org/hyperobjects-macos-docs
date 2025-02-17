# [🏗️] class: CachedGeometryGenerator

:::info

Initial implementation of CachedGeometryGenerator done. 

:::

Swift class that implements a caching system for geometry generation, storing previously calculated geometric shapes to avoid redundant calculations.

The class manages geometry creation through Python code, with built-in dependency tracking to know when cached results need to be recalculated based on input changes.