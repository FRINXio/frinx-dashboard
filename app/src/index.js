import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { isAuthEnabled } from "./auth-helpers";

ReactDOM.render(
  <React.StrictMode>
    <App isAuthEnabled={isAuthEnabled()} />
  </React.StrictMode>,
  document.getElementById("root")
);
