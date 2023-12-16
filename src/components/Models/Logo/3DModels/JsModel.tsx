/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.11 --types ./src/assets/3dModels/htmlCssJs.glb --transform -s
*/

import { useGLTF } from "@react-three/drei";
import * as THREE from "three";
import { GLTF } from "three-stdlib";
import { whiteMaterial } from "./HtmlModel";
import CanvasHOC from "../CanvasHOC";

type GLTFResult = GLTF & {
  nodes: {
    bgBlock5: THREE.Mesh;
    J: THREE.Mesh;
  };
};

const jsMaterial = new THREE.MeshPhysicalMaterial({
  color: "#ECA33D",
  roughness: 1,
  clearcoat: 1,
});

function JsModel(props: JSX.IntrinsicElements["group"]) {
  const { nodes } = useGLTF(
    "/htmlCssJs-transformed.glb"
  ) as unknown as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.J.geometry}
        material={whiteMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bgBlock5.geometry}
        material={jsMaterial}
      />
    </group>
  );
}

useGLTF.preload("/htmlCssJs-transformed.glb");

export default CanvasHOC(JsModel, "JavaScript");
