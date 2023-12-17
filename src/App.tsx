import "./App.css";
import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LoadingPage from "./components/LoadingPage/LoadingPage";
import Sidebar from "./components/Sidebar/Sidebar";
import { useSidebar } from "./hooks/useSidebar";
import { URL_PATH } from "./utils/path";
import Logo from "./components/Models/Logo/Logo";

const Desk = React.lazy(() => import("./components/Models/Desk/Desk"));
const Clock = React.lazy(() => import("./components/Models/Clock/Clock"));
const Ring = React.lazy(() => import("./components/Models/Ring/Ring"));
const LandingPage = React.lazy(
  () => import("./components/LandingPage/LandingPage")
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
