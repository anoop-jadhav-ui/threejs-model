/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 --types ./src/assets/3dModels/blender.glb --transform -s
*/

import { animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import useBounceInAnimation from "../../../../hooks/useBounceInAnimation";
import CanvasHOC from "../CanvasHOC";

type GLTFResult = GLTF & {
  nodes: {
    outerRim: THREE.Mesh;
    center: THREE.Mesh;
  };
};

const orangeMaterial = new THREE.MeshPhysicalMaterial({
  color: "#EA7600",
  roughness: 1,
  clearcoat: 1,
});

const blueMaterial = new THREE.MeshPhysicalMaterial({
  color: "#265787",
  roughness: 1,
  clearcoat: 1,
});

function BlenderModel() {
  const { nodes } = useGLTF(
    "/blender-transformed.glb"
  ) as unknown as GLTFResult;

  const { groupRef, springs } = useBounceInAnimation({
    scaleTo: 0.8,
  });

  return (
    <animated.group dispose={null} ref={groupRef} scale={springs.scale}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.outerRim.geometry}
        material={orangeMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.center.geometry}
        material={blueMaterial}
      />
    </animated.group>
  );
}

useGLTF.preload("/blender-transformed.glb");

export default CanvasHOC(BlenderModel, "Blender");