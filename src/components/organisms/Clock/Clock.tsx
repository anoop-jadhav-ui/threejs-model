import { Globals } from "@react-spring/three";
import { OrbitControls, PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useControls } from "leva";
import React, { Suspense } from "react";
import LevaControls from "../../atoms/LevaControls/LevaControls";
import { LoadingCube } from "../../atoms/LoadingCube/LoadingCube";
import { useCurrentTime } from "./Model/useCurrentTime";
import LoadingPage from "../../molecules/LoadingPage/LoadingPage";

const Model = React.lazy(() => import("./Model/Model"));

Globals.assign({
  frameLoop: "always",
});

function Clock() {
  const canvasColor = useControls("Canvas Color", {
    color: "#fce3f3",
  });

  const { hours, minutes, seconds, isLoading } = useCurrentTime();

  return (
    <>
      <LevaControls />
      {isLoading && <LoadingPage label="Fetching Time..." />}
      {!isLoading && (
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
                <Model hours={hours} minutes={minutes} seconds={seconds} />
                <OrbitControls />
              </Suspense>
            </PresentationControls>
          </Stage>
        </Canvas>
      )}
    </>
  );
}

export default Clock;
