"use client";

import { Box, useTexture } from "@react-three/drei";

import { ShelfsBlock } from "@atoms";

import { useShelfInfo } from "@store";
import { useRef } from "react";
import { Mesh } from "three";

export const Shelf = () => {
    const { width, height, depth } = useShelfInfo();
    const shelfRef = useRef<Mesh>(null);
    const widthShelf = 0.1;

    const [colorMap] = useTexture([
        './texture/color.jpg'
    ]);

    return (
        <group ref={shelfRef} position={[-width / 2, 0, -5]}>
            {/* Ліва балка */}
            <ShelfsBlock widthBlock={widthShelf} heightBlock={height} depthBlock={depth} texture={colorMap} />

            {/* Права балка */}
            <Box args={[widthShelf, height, depth]} position={[width, 0, 0]}>
                <meshStandardMaterial map={colorMap} />
            </Box>
            {/* Нижня балка */}
            <Box args={[width, widthShelf, depth]} position={[width / 2, (0.2 - height / 2), 0]}>
                <meshStandardMaterial map={colorMap} />
            </Box>
            {/* Верхня балка */}
            <Box args={[width, widthShelf, depth]} position={[width / 2, height / 2 - widthShelf / 2, 0]}>
                <meshStandardMaterial map={colorMap} />
            </Box>
        </group >
    )
}