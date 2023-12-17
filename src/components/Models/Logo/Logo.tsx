import React, { Suspense } from "react";
import LoadingPage from "../../LoadingPage/LoadingPage";
import LevaControls from "../../LevaControls/LevaControls";
import { useControls } from "leva";

const HtmlModel = React.lazy(() => import("./3DModels/HtmlModel"));
const CSSModel = React.lazy(() => import("./3DModels/CSSModel"));
const JsModel = React.lazy(() => import("./3DModels/JsModel"));
const ReactModel = React.lazy(() => import("./3DModels/ReactModel"));
const FigmaModel = React.lazy(() => import("./3DModels/FigmaModel"));
const BlenderModel = React.lazy(() => import("./3DModels/BlenderModel"));

const Skills3D = () => {
  const { logo } = useControls("Show Logo", {
    logo: {
      options: ["HTML5", "CSS3", "JavaScript", "React", "Figma", "Blender"],
    },
  });
  return (
    <Suspense fallback={<LoadingPage label="Fetching Model..." />}>
      <LevaControls collapsed={false} />
      <div className="flex bg-red-50 h-full flex-wrap">
        {logo === "HTML5" && <HtmlModel scale={1.5} />}
        {logo === "CSS3" && <CSSModel scale={1.5} />}
        {logo === "JavaScript" && <JsModel scale={1.5} />}
        {logo === "React" && <ReactModel scale={0.5} />}
        {logo === "Figma" && <FigmaModel scale={0.65} />}
        {logo === "Blender" && <BlenderModel scale={1} />}
      </div>
    </Suspense>
  );
};

export default Skills3D;
