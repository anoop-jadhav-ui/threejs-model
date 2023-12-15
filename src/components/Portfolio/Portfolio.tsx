import { Globals } from "@react-spring/three";
import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Leva, useControls } from "leva";
import React, { Suspense } from "react";
import { LoadingCube } from "../Loader3D/LoadingCube";

const Model = React.lazy(() => import("./Model/Model"));

Globals.assign({
  frameLoop: "always",
});

export function Portfolio() {
  const canvasColor = useControls("Canvas Color", {
    color: "#fce3f3",
  });

  return (
    <>
      <div className="relative">
        <Leva collapsed />
        <div className="absolute top-20 right-5 z-10 font-bold text-xl w-60 text-center text-slate-800">
          <span className="absolute -top-3 border-l-4 border-t-4 border-red-400 w-3 h-3 rotate-45 left-1/2 translate-x--1/2" />
          You can play with the{" "}
          <span className="color text-red-400">Colors</span> here
        </div>
      </div>
      <Canvas
        style={{
          height: "100%",
          width: "100%",
          pointerEvents: "auto",
        }}
        frameloop="always"
        dpr={window?.devicePixelRatio}
        camera={{ fov: 25, position: [0, 0, 25] }}
        flat
      >
        <color attach="background" args={[canvasColor.color]} />
        <Stage environment="park" shadows={false} adjustCamera={false}>
          <PresentationControls
            snap
            global
            zoom={0.8}
            rotation={[0, -Math.PI / 6, 0]}
            polar={[0, Math.PI / 6]}
            azimuth={[-Math.PI / 6, Math.PI / 6]}
          >
            <Suspense fallback={<LoadingCube />}>
              <Model />
              <OrbitControls />
            </Suspense>
          </PresentationControls>
        </Stage>
      </Canvas>
    </>
  );
}
