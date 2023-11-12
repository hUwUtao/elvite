import "./utils/config.ts"; // prelude

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(
  // @ts-ignore
  document.getElementById("root")!
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
