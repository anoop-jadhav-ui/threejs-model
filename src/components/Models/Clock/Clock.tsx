import { Globals } from "@react-spring/three";
import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import React, { Suspense } from "react";
import LevaControls from "../../LevaControls/LevaControls";
import { LoadingCube } from "../Loader3D/LoadingCube";

const Model = React.lazy(() => import("./Model/Model"));

Globals.assign({
  frameLoop: "always",
});

function BgCanvas() {
  const canvasColor = useControls("Canvas Color", {
    color: "#fce3f3",
  });

  return (
    <>
      <LevaControls />
      <Canvas
        style={{
          pointerEvents: "auto",
          zIndex: 1,
        }}
        frameloop="always"
        dpr={window?.devicePixelRatio}
        camera={{ fov: 25, position: [0, 0, 24] }}
        flat
      >
        <color attach="background" args={[canvasColor.color]} />
        <Stage environment="park" shadows={false} adjustCamera={false}>
          <PresentationControls
            snap
            global
            zoom={1}
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

export default BgCanvas;
