import { useGLTF } from "@react-three/drei";
import { WorkStationGLTFType } from "../Model";

const ColorCards = () => {
  const { nodes, materials } = useGLTF(
    "/portfolio-transformed.glb"
  ) as unknown as WorkStationGLTFType;

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.colorPalette.geometry}
      material={materials.COLOR_CARD_1}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.colorPaletteCard2.geometry}
        material={materials.COLOR_CARD_2}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.colorPaletteCard3.geometry}
        material={materials.COLOR_CARD_3}
      />
    </mesh>
  );
};

export default ColorCards;
