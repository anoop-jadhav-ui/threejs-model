import { useFrame } from "@react-three/fiber";
import { startTransition } from "react";
import { Group } from "three";

const useSideToSideRotateAnimation = (groupRef: React.RefObject<Group>) => {
  useFrame(({ clock }) => {
    startTransition(() => {
      if (groupRef.current)
        groupRef.current.rotation.y =
          Math.sin(clock.getElapsedTime() / 2) + Math.PI / 6;
    });
  });
};

export default useSideToSideRotateAnimation;
