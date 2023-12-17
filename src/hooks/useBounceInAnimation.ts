import { SpringValue, useSpring } from "@react-spring/three";
import { useProgress } from "@react-three/drei";
import { useEffect, useRef, useTransition } from "react";
import { Group } from "three";

interface UseBounceReturnType {
  groupRef: React.RefObject<Group>;
  springs: {
    scale: SpringValue<number>;
    rotation: SpringValue<number>;
  };
}

interface UseBounceReturnTypeArgs {
  scaleTo: number;
}

const useBounceInAnimation = ({
  scaleTo = 1,
}: UseBounceReturnTypeArgs): UseBounceReturnType => {
  const [, startTransition] = useTransition();
  const { progress } = useProgress();
  const groupRef = useRef<Group>(null);

  const [springs, api] = useSpring(() => ({
    scale: 0,
    rotation: 0,
    config: {
      mass: 4,
      friction: 30,
    },
  }));

  useEffect(() => {
    startTransition(() => {
      if (progress === 100) {
        api.start({
          scale: scaleTo,
        });
      }
    });
  }, [api, progress, scaleTo]);

  return { groupRef, springs };
};

export default useBounceInAnimation;
