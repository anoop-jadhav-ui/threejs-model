import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "./components/molecules/LoadingPage/LoadingPage";
import Sidebar from "./components/molecules/Sidebar/Sidebar";
import { useSidebar } from "./hooks/useSidebar";
import { URL_PATH } from "./utils/path";
import Logo from "./components/organisms/Logo/Logo";

const Desk = React.lazy(() => import("./components/organisms/Desk/Desk"));
const Clock = React.lazy(() => import("./components/organisms/Clock/Clock"));
const Ring = React.lazy(() => import("./components/organisms/Ring/Ring"));
const LandingPage = React.lazy(
  () => import("./components/pages/LandingPage/LandingPage")
);

function App() {
  const { isSidebarOpen } = useSidebar();
  return (
    <div className="flex flex-wrap h-screen">
      <div
        className={`${
          isSidebarOpen ? "w-full h-full z-20 md:w-2/12" : "w-0 h-full md:w-0"
        }`}
      >
        <Sidebar />
      </div>
      <div
        className={`h-full ${
          isSidebarOpen ? "md:w-10/12" : "w-full md:w-full"
        }`}
      >
        <Suspense fallback={<LoadingPage label="Fetching Model..." />}>
          <Routes>
            <Route element={<LandingPage />} path={URL_PATH.root} />
            <Route element={<Desk />} path={URL_PATH.desk} />
            <Route element={<Clock />} path={URL_PATH.wallClock} />
            <Route element={<Ring />} path={URL_PATH.ring} />
            <Route element={<Logo />} path={URL_PATH.logo} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
}

export default App;
