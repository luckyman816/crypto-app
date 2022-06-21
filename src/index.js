import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import "antd/dist/antd.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <App />
  </Router>
);
