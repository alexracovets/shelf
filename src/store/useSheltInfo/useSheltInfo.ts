"use client";

import { create } from 'zustand';

interface ShelfInfo {
    width: number;
    height: number;
    depth: number;
    setWidth: (width: number) => void;
    setHeight: (height: number) => void;
    setDepth: (depth: number) => void;
}

export const useShelfInfo = create<ShelfInfo>((set) => ({
    width: 4,
    height: 4,
    depth: 1,
    setWidth: (width: number) => set({ width }),
    setHeight: (height: number) => set({ height }),
    setDepth: (depth: number) => set({ depth }),
}))