import { Float, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import { MeshPhysicalMaterial } from "three";
import { WorkStationGLTFType } from "../Model";
import { color } from "../materials";

const Pen = () => {
  const { nodes, materials } = useGLTF(
    "/portfolio-transformed.glb"
  ) as unknown as WorkStationGLTFType;

  const { accentColor, penColor } = useControls("Pen", {
    accentColor: color.PEN_RED,
    penColor: color.BLACK,
  });

  const accentMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: accentColor,
        clearcoat: 1,
        roughness: 1,
      }),
    []
  );

  const penMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: penColor,
        clearcoat: 1,
        roughness: 1,
      }),
    []
  );

  const floatSpeed = useMemo(() => {
    return Math.random() + 1;
  }, []);

  return (
    <Float
      position={[0, 0, 0]}
      floatingRange={[0, 0.25]}
      rotation={[Math.PI / 8, 0, 0]}
      rotationIntensity={1}
      floatIntensity={1}
      speed={floatSpeed}
    >
      <group>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pen_1.geometry}
          material={penMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pen_2.geometry}
          material={accentMaterial}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.pen_3.geometry}
          material={materials.WHITE}
        />
      </group>
    </Float>
  );
};

export default Pen;
