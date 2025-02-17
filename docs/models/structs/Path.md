# [✍️] struct: Path



```swift
import Foundation
import simd

// Base protocol for all path segments
protocol PathSegment {
    var startPoint: SIMD3<Float> { get }
    var endPoint: SIMD3<Float> { get }
}

// Straight line segment
struct LineSegment: PathSegment {
    let startPoint: SIMD3<Float>
    let endPoint: SIMD3<Float>
}

// Curved segment using quadratic Bézier curve
struct QuadraticCurveSegment: PathSegment {
    let startPoint: SIMD3<Float>
    let controlPoint: SIMD3<Float>
    let endPoint: SIMD3<Float>
}

// Curved segment using cubic Bézier curve
struct CubicCurveSegment: PathSegment {
    let startPoint: SIMD3<Float>
    let controlPoint1: SIMD3<Float>
    let controlPoint2: SIMD3<Float>
    let endPoint: SIMD3<Float>
}

// Arc segment
struct ArcSegment: PathSegment {
    let startPoint: SIMD3<Float>
    let endPoint: SIMD3<Float>
    let center: SIMD3<Float>
    let normal: SIMD3<Float>
    let radius: Float
    let startAngle: Float
    let endAngle: Float
    let clockwise: Bool
}

// Enum to represent different interpolation types
enum InterpolationType {
    case linear
    case easeIn
    case easeOut
    case easeInOut
    // Add more interpolation types as needed
}

// Struct to represent a complete path
struct Path {
    var segments: [PathSegment]
    var closed: Bool = false
    
    var startPoint: SIMD3<Float>? {
        return segments.first?.startPoint
    }
    
    var endPoint: SIMD3<Float>? {
        return segments.last?.endPoint
    }
    
    mutating func addSegment(_ segment: PathSegment) {
        segments.append(segment)
    }
}

// Helper struct for creating paths with interpolation
struct InterpolatedPathBuilder {
    static func createPath(points: [SIMD3<Float>], interpolationType: InterpolationType) -> Path {
        // Implementation for creating a path with the specified interpolation
        // This would involve creating appropriate segments based on the interpolation type
        // For brevity, we'll return an empty path here
        return Path(segments: [])
    }
}

```
