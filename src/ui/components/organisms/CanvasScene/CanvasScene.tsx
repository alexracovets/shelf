"use client";

import { Canvas } from "@react-three/fiber";

import { Shelf } from "@molecules";

export const CanvasScene = () => {
    return (
        <Canvas
            camera={{
                fov: 75,
                near: 0.1,
                far: 1000,
                position: [0, 0, 5]
            }}
        >
            <ambientLight intensity={1} />
            <directionalLight position={[1, 1, 1]} intensity={1} />
            <Shelf />
        </Canvas>
    )
}