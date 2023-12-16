/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 --types ./src/assets/3dModels/htmlCssJs.glb --transform -s
*/

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import CanvasHOC from "../CanvasHOC";
import { whiteMaterial } from "./HtmlModel";

type GLTFResult = GLTF & {
  nodes: {
    ["3"]: THREE.Mesh;
    bgBlock5: THREE.Mesh;
  };
};

const css3Material = new THREE.MeshPhysicalMaterial({
  color: "#0073B6",
  roughness: 1,
  clearcoat: 1,
});

function CssModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF(
    "/htmlCssJs-transformed.glb"
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["3"].geometry}
        material={whiteMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bgBlock5.geometry}
        material={css3Material}
      />
    </group>
  );
}

export default CanvasHOC(CssModel, "CSS");

useGLTF.preload("/htmlCssJs-transformed.glb");
