import {
  OrbitControls,
  PresentationControlProps,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import { Canvas, GroupProps, useFrame } from "@react-three/fiber";
import React, { useRef, useTransition } from "react";
import { Group } from "three";

const CanvasChild = ({
  renderComponent,
  config,
}: {
  renderComponent: React.ReactNode;
  config: PresentationControlProps;
}) => {
  const groupRef = useRef<Group>(null);

  const [, startTransition] = useTransition();

  useFrame(({ clock }) => {
    startTransition(() => {
      if (groupRef.current)
        groupRef.current.rotation.y =
          Math.sin(clock.getElapsedTime() / 2) + Math.PI / 30;
    });
  });

  return (
    <>
      <PresentationControls
        global
        rotation={[0, -Math.PI / 2, 0]}
        polar={[0, Math.PI / 6]}
        azimuth={[-Math.PI / 6, Math.PI / 6]}
        {...config}
      >
        <Stage environment="forest" shadows={false} adjustCamera={false}>
          <group ref={groupRef}>{renderComponent}</group>
          <OrbitControls />
        </Stage>
      </PresentationControls>
    </>
  );
};

const CanvasHOC =
  (
    ModelComponent: (props: GroupProps) => JSX.Element,
    title: string,
    config?: PresentationControlProps
  ) =>
  (
    props: GroupProps & {
      config?: PresentationControlProps;
    }
  ) => {
    return (
      <Canvas
        title={title}
        flat
        dpr={window?.devicePixelRatio}
        frameloop="always"
        style={{
          aspectRatio: 1,
        }}
      >
        <CanvasChild
          config={config ?? {}}
          renderComponent={<ModelComponent {...props} />}
        />
      </Canvas>
    );
  };

export default CanvasHOC;
