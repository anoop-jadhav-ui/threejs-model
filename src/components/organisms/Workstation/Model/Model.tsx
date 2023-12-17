import { animated } from "@react-spring/three";
import { useGLTF } from "@react-three/drei";
import { Material } from "three";
import { GLTF } from "three-stdlib";
import useBounceInAnimation from "../../../../hooks/useBounceInAnimation";

import Background from "./model-atoms/Background";
import Bulb from "./model-atoms/Bulb";
import ColorCards from "./model-atoms/ColorCards";
import Cubes from "./model-atoms/Cubes";
import Dropper from "./model-atoms/Dropper";
import LatteCup from "./model-atoms/LatteCup";
import Monitor from "./model-atoms/Monitor";
import NoteBook from "./model-atoms/Notebook";
import Pen from "./model-atoms/Pen";
import TextBlock from "./model-atoms/TextBlock";
import TrackPad from "./model-atoms/TrackPad";

export interface SubModelProps {
  materials: {
    [key: string]: Material;
  };
  nodes: {
    [key: string]: {
      geometry: any;
    };
  };
}

export type WorkStationGLTFType = GLTF & {
  nodes: {
    background: THREE.Mesh;
    background2: THREE.Mesh;
    background3: THREE.Mesh;
    background4: THREE.Mesh;
    monitor_1: THREE.Mesh;
    monitor_2: THREE.Mesh;
    monitor_3: THREE.Mesh;
    monitor_4: THREE.Mesh;
    monitor_5: THREE.Mesh;
    macStandBase: THREE.Mesh;
    macStandHinge: THREE.Mesh;
    trackpad: THREE.Mesh;
    trackpadBottom: THREE.Mesh;
    bulb_1: THREE.Mesh;
    bulb_2: THREE.Mesh;
    pen_1: THREE.Mesh;
    pen_2: THREE.Mesh;
    pen_3: THREE.Mesh;
    textBlocks_1: THREE.Mesh;
    textBlocks_2: THREE.Mesh;
    scaleBox: THREE.Mesh;
    notebook: THREE.Mesh;
    notebookPages_1: THREE.Mesh;
    notebookPages_2: THREE.Mesh;
    notebookPages_3: THREE.Mesh;
    notebookRubber: THREE.Mesh;
    dropper_1: THREE.Mesh;
    dropper_2: THREE.Mesh;
    dropperFluid: THREE.Mesh;
    latteMug_1: THREE.Mesh;
    latteMug_2: THREE.Mesh;
    colorPalette: THREE.Mesh;
    colorPaletteCard2: THREE.Mesh;
    colorPaletteCard3: THREE.Mesh;
    randomCube0: THREE.Mesh;
    randomCube3: THREE.Mesh;
    randomCube4: THREE.Mesh;
    randomCube5: THREE.Mesh;
    desktopWindow: THREE.Mesh;
    desktopWindowTab: THREE.Mesh;
  };
  materials: {
    bgGRADIENT: THREE.MeshStandardMaterial;
    GREY_METAL: THREE.MeshStandardMaterial;
    LIGHT_BLUE_EMISSIVE: THREE.MeshStandardMaterial;
    BLACK: THREE.MeshStandardMaterial;
    MONITOR_TEXTURE: THREE.MeshStandardMaterial;
    RED: THREE.MeshStandardMaterial;
    WHITE: THREE.MeshStandardMaterial;
    YELLOW: THREE.MeshStandardMaterial;
    DARK_BLUE: THREE.MeshStandardMaterial;
    BROWN_TEXTURE: THREE.MeshStandardMaterial;
    CUP_TEXTURE: THREE.MeshStandardMaterial;
    LIGHT_BLUE: THREE.MeshStandardMaterial;
    GLASS: THREE.MeshPhysicalMaterial;
    ORANGE: THREE.MeshStandardMaterial;
    COLOR_CARD_1: THREE.MeshStandardMaterial;
    COLOR_CARD_2: THREE.MeshStandardMaterial;
    COLOR_CARD_3: THREE.MeshStandardMaterial;
    LIGHT_PURPLE: THREE.MeshStandardMaterial;
    MONITOR_SCREEN_TEXTURE: THREE.MeshStandardMaterial;
  };
};

const Model = (props: JSX.IntrinsicElements["group"]) => {
  const { groupRef, springs } = useBounceInAnimation({
    scaleTo: 1,
  });

  return (
    <animated.group
      {...props}
      dispose={null}
      ref={groupRef}
      scale={springs.scale}
    >
      <TrackPad />
      <TextBlock />
      <Bulb />
      <Cubes />
      <Monitor />
      <Dropper />
      <Pen />
      <LatteCup />
      <NoteBook />
      <ColorCards />
      <Background />
    </animated.group>
  );
};

useGLTF.preload("/portfolio-transformed.glb");
export default Model;
