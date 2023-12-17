import { Link, useLocation } from "react-router-dom";
import { useSidebar } from "../../../hooks/useSidebar";
import { URL_PATH } from "../../../utils/path";
import { isMobile } from "react-device-detect";
import { useEffect } from "react";
interface SidebarItem {
  path: string;
  element: React.ReactElement;
}

const sidebarItems: SidebarItem[] = [
  {
    path: URL_PATH.workstation,
    element: (
      <>
        <span>🖥️</span>
        <span className="pl-4">Workstation</span>
      </>
    ),
  },
  {
    path: URL_PATH.wallClock,
    element: (
      <>
        <span>⏰ </span>
        <span className="pl-4">Wall Clock</span>
      </>
    ),
  },
  {
    path: URL_PATH.logo,
    element: (
      <>
        <span>🚀</span>
        <span className="pl-4">Tech Skill Logos</span>
      </>
    ),
  },
  {
    path: URL_PATH.ring,
    element: (
      <>
        <span>💍</span>
        <span className="pl-4">Ring Config</span>
      </>
    ),
  },
];

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isMobile && pathname !== URL_PATH.root) {
      toggleSidebar(false);
    }
  }, [pathname, toggleSidebar]);

  const linkClickHandler = () => {
    if (isMobile && isSidebarOpen) {
      toggleSidebar(false);
    }
  };

  return (
    <div className="bg-gray-800 h-full z-10 relative box-border">
      <button
        className={`absolute top-2 right-2 hover:bg-red-400 rounded-md p-1 ${
          isSidebarOpen
            ? "translate-x-0"
            : "translate-x-12  bg-gray-800 p-2 rounded-md rounded-l-none"
        }`}
        onClick={() => {
          toggleSidebar((prevValue) => !prevValue);
        }}
      >
        {!isSidebarOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        )}
        {isSidebarOpen && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="white"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        )}
      </button>
      <div className={`${!isSidebarOpen ? "invisible" : ""}`}>
        <Link to={URL_PATH.root}>
          <div className={`text-2xl font-bold text-white text-center pt-4 `}>
            <span className="text-red-400">3D</span> Models
          </div>
        </Link>
        <div className="mt-8 font-bold text-md text-slate-500 text-center">
          Choose Model
        </div>
        <div className="p-2 flex flex-col gap-y-2">
          {sidebarItems.map((item) => {
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white text-xl md:text-base bg-gray-700 p-4 pl-6 rounded-md cursor-pointer hover:bg-red-400 ${
                  pathname === item.path && "bg-red-400"
                }`}
                onClick={linkClickHandler}
              >
                {item.element}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
