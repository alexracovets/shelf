"use client";

import { Box, Html } from "@react-three/drei";
import { TiArrowUnsorted } from "react-icons/ti";
import { Texture } from "three";
import { PointerEvent, useCallback, useRef, useState, useEffect } from "react";

interface ShelfsBlockProps {
    widthBlock: number;
    heightBlock: number;
    depthBlock: number;
    texture: Texture | Readonly<Texture | null | undefined>;
}

import { useShelfInfo } from '@store';
import { useFrame, useThree } from "@react-three/fiber";

export const ShelfsBlock = ({ widthBlock, heightBlock, depthBlock, texture }: ShelfsBlockProps) => {
    const { setWidth } = useShelfInfo();
    const { viewport } = useThree();
    const [drag, setDrag] = useState(false);
    const lastUpdateRef = useRef(0);
    const throttleDelay = 16;
    const mousePositionRef = useRef({ x: 0, y: 0 });

    const handlePointerDown = useCallback((e: PointerEvent<SVGElement>) => {
        e.stopPropagation();
        setDrag(true);
    }, []);

    const handleMouseMove = useCallback((e: MouseEvent) => {
        if (drag) {
            const normalizedX = (e.clientX / window.innerWidth) * 2 - 1;
            mousePositionRef.current.x = normalizedX;
        }
    }, [drag]);

    const handleMouseUp = useCallback(() => {
        setDrag(false);
    }, []);

    useEffect(() => {
        if (drag) {
            window.addEventListener('mousemove', handleMouseMove);
            window.addEventListener('mouseup', handleMouseUp);

            return () => {
                window.removeEventListener('mousemove', handleMouseMove);
                window.removeEventListener('mouseup', handleMouseUp);
            };
        }
    }, [drag, handleMouseMove, handleMouseUp]);

    useFrame(() => {
        if (drag) {
            const convertMouse = (1 + mousePositionRef.current.x) / 2;
            const calc = Math.max(0.1, viewport.width - (convertMouse * viewport.width));

            const now = Date.now();
            if (now - lastUpdateRef.current >= throttleDelay) {
                setWidth(calc);
                lastUpdateRef.current = now;
            }
        }
    });

    return (
        <>
            <mesh position={[0, 0, 0]}>
                <Html
                    position={[0, 0, depthBlock / 2]}
                    className="rotate-90 translate-x-[-50%] translate-y-[-50%] flex justify-center items-center"
                >
                    <TiArrowUnsorted
                        className="text-[30px] cursor-grab active:cursor-grabbing"
                        onPointerDown={handlePointerDown}
                        style={{ pointerEvents: 'auto' }}
                    />
                </Html>
                <Box args={[widthBlock, heightBlock, depthBlock]} position={[0, 0, 0]}>
                    <meshStandardMaterial map={texture} />
                </Box>
            </mesh>
        </>
    )
};