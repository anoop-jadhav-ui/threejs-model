import { useGLTF } from "@react-three/drei";
import { useControls } from "leva";
import { useMemo } from "react";
import { MeshPhysicalMaterial } from "three";
import { WorkStationGLTFType } from "../Model";
import { color } from "../materials";

const NoteBook = () => {
  const { nodes } = useGLTF(
    "/portfolio-transformed.glb"
  ) as unknown as WorkStationGLTFType;

  const { rubber, cover, bookmark1, pages, bookmark2 } = useControls(
    "Notebook",
    {
      bookmark1: color.RED,
      bookmark2: color.NOTEBOOK_YELLOW,
      rubber: color.NOTEBOOK_RUBBER,
      pages: color.WHITE,
      cover: color.NOTEBOOK_COVER,
    }
  );
  const bookmark1Material = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: bookmark1,
        clearcoat: 1,
        roughness: 1,
      }),
    []
  );
  const rubberMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: rubber,
        clearcoat: 1,
        roughness: 1,
      }),
    []
  );
  const coverMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: cover,
        clearcoat: 1,
        roughness: 1,
      }),
    []
  );
  const pagesMaterial = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: pages,
        clearcoat: 1,
        roughness: 1,
      }),
    []
  );
  const bookmark2Material = useMemo(
    () =>
      new MeshPhysicalMaterial({
        color: bookmark2,
        clearcoat: 1,
        roughness: 1,
      }),
    []
  );

  return (
    <mesh
      castShadow
      receiveShadow
      geometry={nodes.notebook.geometry}
      material={coverMaterial}
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.notebookPages_1.geometry}
        material={pagesMaterial}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.notebookPages_2.geometry}
        material={bookmark1Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.notebookPages_3.geometry}
        material={bookmark2Material}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.notebookRubber.geometry}
        material={rubberMaterial}
      />
    </mesh>
  );
};

export default NoteBook;
