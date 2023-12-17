import { useControls } from "leva";
import { useMemo } from "react";
import { MeshPhysicalMaterial } from "three";
import { color } from "../materials";
import { WorkStationGLTFType } from "../Model";
import { useGLTF } from "@react-three/drei";

const Background = () => {
  const { nodes } = useGLTF(
    "/portfolio-transformed.glb"
  ) as unknown as WorkStationGLTFType;

  const { bgColor } = useControls("background", {
    bgColor: color.BACKGROUND,
  });

  const bgMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: bgColor,
        clearcoat: 1,
        roughness: 1,
      }),
    []
  );

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.background.geometry}
      material={bgMaterial}
      position={[0, -0.06, 0]}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background4.geometry}
        material={bgMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background2.geometry}
        material={bgMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.background3.geometry}
        material={bgMaterial}
      />
    </mesh>
  );
};

export default Background;
