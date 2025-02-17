# [✍️] class: Camera

:::info

Current state of Camera class is a draft LLM-generated version. To be reviewed & refined before implementation.

:::


class which can be instantiated inside the SceneData object to store the data of a camera.


## Implementation

```swift
import Foundation
import simd

class Camera {
    // Camera position
    var position: SIMD3<Float>
    
    // Camera orientation
    var forward: SIMD3<Float>
    var up: SIMD3<Float>
    var right: SIMD3<Float>
    
    // Camera properties
    var fov: Float
    var aspectRatio: Float
    var nearPlane: Float
    var farPlane: Float

    // Frustrum properties
    private var frustumCorners: [SIMD3<Float>] = []
    private var frustumLines: [(SIMD3<Float>, SIMD3<Float>)] = []
    
    init(position: SIMD3<Float> = SIMD3<Float>(0, 0, 5),
         lookAt: SIMD3<Float> = SIMD3<Float>(0, 0, 0),
         up: SIMD3<Float> = SIMD3<Float>(0, 1, 0),
         fov: Float = 60.0,
         aspectRatio: Float = 16.0 / 9.0,
         nearPlane: Float = 0.1,
         farPlane: Float = 100.0) {
        
        self.position = position
        self.fov = fov
        self.aspectRatio = aspectRatio
        self.nearPlane = nearPlane
        self.farPlane = farPlane
        
        // Calculate orientation vectors
        self.forward = normalize(lookAt - position)
        self.right = normalize(cross(self.forward, up))
        self.up = cross(self.right, self.forward)
    }
    
    func viewMatrix() -> simd_float4x4 {
        let f = forward
        let r = right
        let u = up
        let p = position
        
        return simd_float4x4(
            SIMD4<Float>(r.x, u.x, -f.x, 0),
            SIMD4<Float>(r.y, u.y, -f.y, 0),
            SIMD4<Float>(r.z, u.z, -f.z, 0),
            SIMD4<Float>(-dot(p, r), -dot(p, u), dot(p, f), 1)
        )
    }
    
    func projectionMatrix() -> simd_float4x4 {
        let fovRadians = fov * (Float.pi / 180.0)
        let f = 1.0 / tan(fovRadians / 2.0)
        let a = aspectRatio
        let nearMinusFar = nearPlane - farPlane
        
        return simd_float4x4(
            SIMD4<Float>(f / a, 0, 0, 0),
            SIMD4<Float>(0, f, 0, 0),
            SIMD4<Float>(0, 0, (farPlane + nearPlane) / nearMinusFar, -1),
            SIMD4<Float>(0, 0, (2 * farPlane * nearPlane) / nearMinusFar, 0)
        )
    }
    
    func lookAt(_ target: SIMD3<Float>) {
        forward = normalize(target - position)
        right = normalize(cross(forward, SIMD3<Float>(0, 1, 0)))
        up = cross(right, forward)
    }
    
    func move(_ direction: SIMD3<Float>) {
        position += direction
    }
    
    func rotate(pitch: Float, yaw: Float) {
        let pitchRotation = simd_float3x3(rotationAroundAxis: right, angle: pitch)
        let yawRotation = simd_float3x3(rotationAroundAxis: SIMD3<Float>(0, 1, 0), angle: yaw)
        
        forward = yawRotation * (pitchRotation * forward)
        right = normalize(cross(forward, SIMD3<Float>(0, 1, 0)))
        up = cross(right, forward)
    }


    func updateFrustumGeometry() {
        let halfVSide = nearPlane * tan(fov * 0.5 * Float.pi / 180.0)
        let halfHSide = halfVSide * aspectRatio
        let frontMultiplier = farPlane / nearPlane

        // Near plane corners
        let nearTopLeft = SIMD3<Float>(-halfHSide, halfVSide, -nearPlane)
        let nearTopRight = SIMD3<Float>(halfHSide, halfVSide, -nearPlane)
        let nearBottomLeft = SIMD3<Float>(-halfHSide, -halfVSide, -nearPlane)
        let nearBottomRight = SIMD3<Float>(halfHSide, -halfVSide, -nearPlane)

        // Far plane corners
        let farTopLeft = nearTopLeft * frontMultiplier
        let farTopRight = nearTopRight * frontMultiplier
        let farBottomLeft = nearBottomLeft * frontMultiplier
        let farBottomRight = nearBottomRight * frontMultiplier

        // Update frustum corners
        frustumCorners = [
            nearTopLeft, nearTopRight, nearBottomLeft, nearBottomRight,
            farTopLeft, farTopRight, farBottomLeft, farBottomRight
        ]

        // Update frustum lines
        frustumLines = [
            (nearTopLeft, nearTopRight), (nearTopRight, nearBottomRight),
            (nearBottomRight, nearBottomLeft), (nearBottomLeft, nearTopLeft),
            (farTopLeft, farTopRight), (farTopRight, farBottomRight),
            (farBottomRight, farBottomLeft), (farBottomLeft, farTopLeft),
            (nearTopLeft, farTopLeft), (nearTopRight, farTopRight),
            (nearBottomLeft, farBottomLeft), (nearBottomRight, farBottomRight)
        ]

        // Transform frustum to world space
        let cameraToWorldMatrix = viewMatrix().inverse
        frustumCorners = frustumCorners.map { cameraToWorldMatrix.act($0) }
        frustumLines = frustumLines.map { (cameraToWorldMatrix.act($0.0), cameraToWorldMatrix.act($0.1)) }
    }

    func getFrustumCorners() -> [SIMD3<Float>] {
        updateFrustumGeometry()
        return frustumCorners
    }

    func getFrustumLines() -> [(SIMD3<Float>, SIMD3<Float>)] {
        updateFrustumGeometry()
        return frustumLines
    }
}

```
