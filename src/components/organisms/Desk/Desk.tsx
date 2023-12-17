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

function Desk() {
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
        flat
        className="bg-red-50"
      >
        <color attach="background" args={[canvasColor.color]} />
        <Stage environment="park" shadows={false} adjustCamera={false}>
          <PresentationControls
            snap
            global
            cursor
            zoom={1}
            rotation={[0, -Math.PI / 6, 0]}
            polar={[0, Math.PI / 6]}
            azimuth={[-Math.PI / 6, Math.PI / 6]}
          >
            <Suspense fallback={<LoadingCube />}>
              <Model position={[0, -1, 0]} />
            </Suspense>
          </PresentationControls>
        </Stage>
        {/* <axesHelper args={[10]} /> */}
        <OrbitControls />
      </Canvas>
    </>
  );
}

export default Desk;
