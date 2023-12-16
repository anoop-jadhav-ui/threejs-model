import { useControls } from "leva";

const useRingConfig = () => {
  const { headColor, bodyColor } = useControls("Ring Material", {
    headColor: { options: ["gold", "silver"] },
    bodyColor: { options: ["gold", "silver"] },
  });
  const { diamond } = useControls("Ring Diamond", {
    diamond: { options: ["diamond1", "diamond2", "diamond3"] },
  });

  return { headColor, bodyColor, diamond };
};

export default useRingConfig;
