import { PresentationControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { ReactNode, Suspense, lazy } from "react";
import { LoadingCube } from "../../atoms/LoadingCube/LoadingCube";
import LevaControls from "../../atoms/LevaControls/LevaControls";

const Model = lazy(() => import("./Model/Model"));

const RingCanvasWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <LevaControls collapsed={false} />
      <Canvas
        style={{
          pointerEvents: "auto",
          zIndex: 1,
        }}
        frameloop="always"
        dpr={window?.devicePixelRatio}
        flat
        shadows
        camera={{ fov: 25, position: [0, 0, 24] }}
        onCreated={(state) => {
          state.gl.setClearColor("#fff1f4");
        }}
        className="bg-red-50"
      >
        {children}
      </Canvas>
    </>
  );
};

function Ring() {
  return (
    <RingCanvasWrapper>
      <Stage environment="park" shadows={true} adjustCamera={false}>
        <PresentationControls
          global
          zoom={1}
          rotation={[0, -Math.PI / 2, -Math.PI / 5]}
          snap
        >
          <Suspense fallback={<LoadingCube />}>
            <Model />
          </Suspense>
        </PresentationControls>
      </Stage>
    </RingCanvasWrapper>
  );
}

export default Ring;
