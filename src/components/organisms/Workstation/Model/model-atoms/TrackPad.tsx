import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import { MeshPhysicalMaterial } from "three";
import { color } from "../materials";
import { WorkStationGLTFType } from "../Model";

const TrackPad = () => {
  const { nodes } = useGLTF(
    "/portfolio-transformed.glb"
  ) as unknown as WorkStationGLTFType;

  const { white, grey } = useControls("Trackpad", {
    white: color.WHITE,
    grey: color.LIGHT_GREY,
  });

  const whiteMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: white,
        roughness: 1,
        clearcoat: 1,
      }),
    []
  );

  const greyMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: grey,
        clearcoat: 1,
      }),
    []
  );

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.trackpad.geometry}
      material={whiteMaterial}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.trackpadBottom.geometry}
        material={greyMaterial}
      />
    </mesh>
  );
};

export default TrackPad;
