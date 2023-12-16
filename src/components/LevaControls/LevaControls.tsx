import { Leva } from "leva";

const LevaControls = ({ collapsed = true }: { collapsed?: boolean }) => {
  return (
    <div className="relative z-10">
      <Leva collapsed={collapsed} />
      {collapsed && (
        <div className="absolute top-20 right-5 z-10 font-bold text-xl w-60 text-center text-slate-800">
          <span className="absolute -top-3 border-l-4 border-t-4 border-red-400 w-3 h-3 rotate-45 left-1/2 translate-x--1/2" />
          You can play with the{" "}
          <span className="color text-red-400">Colors</span> here
        </div>
      )}
    </div>
  );
};

export default LevaControls;
