import { Merged, useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import { MeshPhysicalMaterial } from "three";
import { CubeFloat } from "../AnimationUtils";
import { WorkStationGLTFType } from "../Model";
import { color } from "../materials";

const Cubes = () => {
  const { nodes } = useGLTF(
    "/portfolio-transformed.glb"
  ) as unknown as WorkStationGLTFType;

  const { cubeColor } = useControls("Cubes", {
    cubeColor: color.CUBE_COLOR,
  });

  const material = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: cubeColor,
        roughness: 1,
        clearcoat: 1,
      }),
    []
  );

  const cubeMesh = useMemo(
    () => ({
      Cube: {
        ...nodes.randomCube0,
        material: material,
      },
    }),
    []
  );

  return (
    <Merged meshes={cubeMesh}>
      {(Models: any) => (
        <>
          <CubeFloat>
            <Models.Cube castShadow receiveShadow position={[3, -1, 0]} />
          </CubeFloat>
          <CubeFloat>
            <Models.Cube castShadow receiveShadow position={[5, -3, 3]} />
          </CubeFloat>
          <CubeFloat>
            <Models.Cube castShadow receiveShadow position={[-3, 0, 0]} />
          </CubeFloat>
          <CubeFloat>
            <Models.Cube castShadow receiveShadow position={[-3, -2, 0]} />
          </CubeFloat>
        </>
      )}
    </Merged>
  );
};

export default Cubes;
