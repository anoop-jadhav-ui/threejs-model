import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import { MeshPhysicalMaterial } from "three";
import { WorkStationGLTFType } from "../Model";
import { color } from "../materials";

const LatteCup = () => {
  const { nodes, materials } = useGLTF(
    "/portfolio-transformed.glb"
  ) as unknown as WorkStationGLTFType;

  const { lid } = useControls("LatteCup", {
    lid: color.LATTE_LID_RED,
  });

  const lidMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: lid,
        clearcoat: 1,
        roughness: 1,
      }),
    []
  );

  return (
    <>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.latteMug_1.geometry}
        material={materials.CUP_TEXTURE}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.latteMug_2.geometry}
        material={lidMaterial}
      />
    </>
  );
};

export default LatteCup;
