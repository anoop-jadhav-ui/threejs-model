import "./App.css";
import { Portfolio } from "./components/Portfolio/Portfolio";
// import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className="flex flex-wrap h-screen">
      {/* <div className="w-full md:w-2/12 bg-red-200 ">
        <Sidebar />
      </div> */}
      <div className="w-full">
        <Portfolio />
      </div>
    </div>
  );
}

export default App;
