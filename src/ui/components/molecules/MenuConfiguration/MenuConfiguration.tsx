"use client";

import { Input, Label } from '@atoms';

import { useShelfInfo } from "@store";

export const MenuConfiguration = () => {
    const { width, height, depth, setWidth, setHeight, setDepth } = useShelfInfo();

    return (
        <div className="bg-gray-800 h-full w-[400px] p-4">
            <p className="text-white text-xl font-bold uppercase mb-4 text-center">shelf&apos;s configuration</p>
            <form className="">
                <div className="flex flex-col gap-4">
                    <p className="text-white uppercase mb-2">Dimensions</p>
                    <div className="flex gap-4">
                        <Label htmlFor="width">Width:</Label>
                        <Input id="width" type="number" step={0.1} min={0} value={width} onChange={(e) => setWidth(Number(e.target.value))} />
                    </div>
                    <div className="flex gap-4">
                        <Label htmlFor="height">Height:</Label>
                        <Input id="height" type="number" step={0.1} min={0} value={height} onChange={(e) => setHeight(Number(e.target.value))} />
                    </div>
                    <div className="flex gap-4">
                        <Label htmlFor="depth">Depth:</Label>
                        <Input id="depth" type="number" step={0.1} min={0} value={depth} onChange={(e) => setDepth(Number(e.target.value))} />
                    </div>
                </div>

            </form>

        </div>
    )
}