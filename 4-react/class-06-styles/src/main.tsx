import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./pages/App";
import { Reset } from "./styles/reset";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./styles/appTheme";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme = {appTheme}/>
    <App />
    <Reset />
  </React.StrictMode>
);
