import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import { MeshPhysicalMaterial } from "three";
import { WorkStationGLTFType } from "../Model";
import { color } from "../materials";

const TextBlock = () => {
  const { nodes, materials } = useGLTF(
    "/portfolio-transformed.glb"
  ) as unknown as WorkStationGLTFType;

  const { red, blue } = useControls("TextBlock", {
    red: color.TEXTBLOCK_RED,
    blue: color.TEXTBLOCK_BLUE,
  });

  const redMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: red,
        clearcoat: 1,
      }),
    []
  );
  const blueMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: blue,
        clearcoat: 1,
      }),
    []
  );

  return (
    <>
      <group position={[0, -0.02, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.textBlocks_1.geometry}
          material={redMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.textBlocks_2.geometry}
          material={blueMaterial}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.scaleBox.geometry}
        material={materials.BROWN_TEXTURE}
      />
    </>
  );
};

export default TextBlock;
