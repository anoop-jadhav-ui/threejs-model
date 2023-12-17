/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 --types ./public/loadingCube.glb --transform -s
*/

import { GradientTexture, Html, useGLTF, useProgress } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useTransition } from "react";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { color } from "../../organisms/Desk/Model/materials";

type GLTFResult = GLTF & {
  nodes: {
    LoadingCube: THREE.Mesh;
  };
};
export function LoadingCube(props: JSX.IntrinsicElements["group"]) {
  const [, startTransition] = useTransition();
  const { progress } = useProgress();
  const { nodes } = useGLTF(
    "/loadingCube-transformed.glb"
  ) as unknown as GLTFResult;

  const cubeRef = useRef<THREE.Mesh>(null);

  useFrame(({ clock }) => {
    startTransition(() => {
      if (cubeRef.current) {
        cubeRef.current.rotation.x = Math.sin(clock.getElapsedTime());
        cubeRef.current.rotation.y = Math.cos(clock.getElapsedTime());
      }
    });
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        ref={cubeRef}
        castShadow
        receiveShadow
        geometry={nodes.LoadingCube.geometry}
        scale={0.5}
        rotation={[Math.PI / 2, Math.PI / 4, 0]}
      >
        <meshBasicMaterial>
          <GradientTexture
            stops={[0, 0.4, 1]} // As many stops as you want
            colors={[color.PEN_RED, color.BACKGROUND, color.PEN_RED]} // Colors need to match the number of stops
          />
        </meshBasicMaterial>
      </mesh>

      <Html
        as="div"
        role="progressbar"
        style={{
          position: "relative",
          textAlign: "center",
        }}
        center
      >
        <p
          className="text-slate-800"
          style={{
            fontSize: 18,
            fontWeight: "bold",
            position: "absolute",
            left: "-1rem",
            top: "4.5rem",
          }}
        >
          {progress.toFixed()}%
        </p>
      </Html>
    </group>
  );
}

useGLTF.preload("/loadingCube-transformed.glb");
