"use client";

import { CanvasScene } from "@organisms";
import { SceneWrapper } from "@atoms";
import { MenuConfiguration } from "@molecules";

export default function Home() {
  return (
    <SceneWrapper>
      <div className="flex h-full">
        <MenuConfiguration />
        <CanvasScene />
      </div>
    </SceneWrapper>
  );
}
