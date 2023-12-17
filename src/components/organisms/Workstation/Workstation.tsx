import { Globals } from "@react-spring/three";
import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import React, { Suspense } from "react";
import LevaControls from "../../atoms/LevaControls/LevaControls";
import { LoadingCube } from "../../atoms/LoadingCube/LoadingCube";

const Model = React.lazy(() => import("./Model/Model"));

Globals.assign({
  frameLoop: "always",
});

function Workstation() {
  const canvasColor = useControls("Canvas Color", {
    color: "#fef2f2",
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
        className="bg-red-50"
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
            azimuth={[-Infinity, Infinity]}
          >
            <Suspense fallback={<LoadingCube />}>
              <Model position={[0, -1.5, 0]} />
            </Suspense>
          </PresentationControls>
        </Stage>
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default Workstation;
