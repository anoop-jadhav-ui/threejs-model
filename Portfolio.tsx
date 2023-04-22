/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 --types ./public/portfolio.glb --transform -s
*/

import * as THREE from 'three'
import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
  nodes: {
    background: THREE.Mesh
    background2: THREE.Mesh
    background3: THREE.Mesh
    background4: THREE.Mesh
    monitor_1: THREE.Mesh
    monitor_2: THREE.Mesh
    monitor_3: THREE.Mesh
    monitor_4: THREE.Mesh
    monitor_5: THREE.Mesh
    macStandBase: THREE.Mesh
    macStandHinge: THREE.Mesh
    trackpad: THREE.Mesh
    trackpadBottom: THREE.Mesh
    bulb_1: THREE.Mesh
    bulb_2: THREE.Mesh
    pen_1: THREE.Mesh
    pen_2: THREE.Mesh
    pen_3: THREE.Mesh
    textBlocks_1: THREE.Mesh
    textBlocks_2: THREE.Mesh
    scaleBox: THREE.Mesh
    notebook: THREE.Mesh
    notebookPages_1: THREE.Mesh
    notebookPages_2: THREE.Mesh
    notebookPages_3: THREE.Mesh
    notebookRubber: THREE.Mesh
    dropper_1: THREE.Mesh
    dropper_2: THREE.Mesh
    dropperFluid: THREE.Mesh
    latteMug_1: THREE.Mesh
    latteMug_2: THREE.Mesh
    colorPalette: THREE.Mesh
    colorPaletteCard2: THREE.Mesh
    colorPaletteCard3: THREE.Mesh
    randomCube0: THREE.Mesh
    randomCube3: THREE.Mesh
    randomCube4: THREE.Mesh
    randomCube5: THREE.Mesh
    desktopWindow: THREE.Mesh
    desktopWindowTab: THREE.Mesh
  }
  materials: {
    bgGRADIENT: THREE.MeshStandardMaterial
    GREY_METAL: THREE.MeshStandardMaterial
    LIGHT_BLUE_EMISSIVE: THREE.MeshStandardMaterial
    BLACK: THREE.MeshStandardMaterial
    MONITOR_TEXTURE: THREE.MeshStandardMaterial
    RED: THREE.MeshStandardMaterial
    WHITE: THREE.MeshStandardMaterial
    YELLOW: THREE.MeshStandardMaterial
    DARK_BLUE: THREE.MeshStandardMaterial
    BROWN_TEXTURE: THREE.MeshStandardMaterial
    CUP_TEXTURE: THREE.MeshStandardMaterial
    LIGHT_BLUE: THREE.MeshStandardMaterial
    GLASS: THREE.MeshPhysicalMaterial
    ORANGE: THREE.MeshStandardMaterial
    COLOR_CARD_1: THREE.MeshStandardMaterial
    COLOR_CARD_2: THREE.MeshStandardMaterial
    COLOR_CARD_3: THREE.MeshStandardMaterial
    LIGHT_PURPLE: THREE.MeshStandardMaterial
    MONITOR_SCREEN_TEXTURE: THREE.MeshStandardMaterial
  }
}

export function Model(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/portfolio-transformed.glb') as GLTFResult
  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.background.geometry} material={materials.bgGRADIENT} position={[0, -0.06, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.background2.geometry} material={materials.bgGRADIENT} />
        <mesh castShadow receiveShadow geometry={nodes.background3.geometry} material={materials.bgGRADIENT} />
        <mesh castShadow receiveShadow geometry={nodes.background4.geometry} material={materials.bgGRADIENT} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.macStandBase.geometry} material={materials.GREY_METAL} />
      <mesh castShadow receiveShadow geometry={nodes.macStandHinge.geometry} material={materials.GREY_METAL} />
      <mesh castShadow receiveShadow geometry={nodes.trackpad.geometry} material={materials.WHITE}>
        <mesh castShadow receiveShadow geometry={nodes.trackpadBottom.geometry} material={materials.GREY_METAL} />
      </mesh>
      <group position={[0, -0.02, 0]}>
        <mesh castShadow receiveShadow geometry={nodes.textBlocks_1.geometry} material={materials.RED} />
        <mesh castShadow receiveShadow geometry={nodes.textBlocks_2.geometry} material={materials.MONITOR_TEXTURE} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.scaleBox.geometry} material={materials.BROWN_TEXTURE} />
      <mesh castShadow receiveShadow geometry={nodes.notebook.geometry} material={materials.DARK_BLUE}>
        <mesh castShadow receiveShadow geometry={nodes.notebookRubber.geometry} material={materials.LIGHT_BLUE} />
        <mesh castShadow receiveShadow geometry={nodes.notebookPages_1.geometry} material={materials.CUP_TEXTURE} />
        <mesh castShadow receiveShadow geometry={nodes.notebookPages_2.geometry} material={materials.RED} />
        <mesh castShadow receiveShadow geometry={nodes.notebookPages_3.geometry} material={materials.YELLOW} />
      </mesh>
      <group position={[-1.47, 3.2, 0.13]}>
        <mesh castShadow receiveShadow geometry={nodes.dropper_1.geometry} material={materials.GLASS} />
        <mesh castShadow receiveShadow geometry={nodes.dropper_2.geometry} material={materials.ORANGE} />
        <mesh castShadow receiveShadow geometry={nodes.dropperFluid.geometry} material={materials.RED} position={[0.41, -0.55, 0.23]} scale={0.95} />
      </group>
      <mesh castShadow receiveShadow geometry={nodes.colorPalette.geometry} material={materials.COLOR_CARD_1}>
        <mesh castShadow receiveShadow geometry={nodes.colorPaletteCard2.geometry} material={materials.COLOR_CARD_2} />
        <mesh castShadow receiveShadow geometry={nodes.colorPaletteCard3.geometry} material={materials.COLOR_CARD_3} />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.randomCube0.geometry} material={materials.LIGHT_PURPLE} />
      <mesh castShadow receiveShadow geometry={nodes.randomCube3.geometry} material={materials.LIGHT_PURPLE} />
      <mesh castShadow receiveShadow geometry={nodes.randomCube4.geometry} material={materials.LIGHT_PURPLE} position={[0, 0, 0.3]} />
      <mesh castShadow receiveShadow geometry={nodes.randomCube5.geometry} material={materials.LIGHT_PURPLE} />
      <mesh castShadow receiveShadow geometry={nodes.desktopWindow.geometry} material={materials.MONITOR_SCREEN_TEXTURE} />
      <mesh castShadow receiveShadow geometry={nodes.desktopWindowTab.geometry} material={materials.MONITOR_SCREEN_TEXTURE} />
      <mesh castShadow receiveShadow geometry={nodes.monitor_1.geometry} material={materials.GREY_METAL} />
      <mesh castShadow receiveShadow geometry={nodes.monitor_2.geometry} material={materials.LIGHT_BLUE_EMISSIVE} />
      <mesh castShadow receiveShadow geometry={nodes.monitor_3.geometry} material={materials.BLACK} />
      <mesh castShadow receiveShadow geometry={nodes.monitor_4.geometry} material={materials.MONITOR_TEXTURE} />
      <mesh castShadow receiveShadow geometry={nodes.monitor_5.geometry} material={materials.RED} />
      <mesh castShadow receiveShadow geometry={nodes.bulb_1.geometry} material={materials.YELLOW} />
      <mesh castShadow receiveShadow geometry={nodes.bulb_2.geometry} material={materials.DARK_BLUE} />
      <mesh castShadow receiveShadow geometry={nodes.pen_1.geometry} material={materials.BLACK} />
      <mesh castShadow receiveShadow geometry={nodes.pen_2.geometry} material={materials.RED} />
      <mesh castShadow receiveShadow geometry={nodes.pen_3.geometry} material={materials.WHITE} />
      <mesh castShadow receiveShadow geometry={nodes.latteMug_1.geometry} material={materials.CUP_TEXTURE} />
      <mesh castShadow receiveShadow geometry={nodes.latteMug_2.geometry} material={materials.RED} />
    </group>
  )
}

useGLTF.preload('/portfolio-transformed.glb')