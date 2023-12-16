import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

import { SidebarContextProvider } from "./contexts/SidebarContext.tsx";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SidebarContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SidebarContextProvider>
  </React.StrictMode>
);
