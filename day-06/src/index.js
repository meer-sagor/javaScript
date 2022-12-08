import React from "react";
import ReactDom from "react-dom/client";
const rootElement = document.getElementById("app");
const root = ReactDom.createRoot(rootElement);
import App from "./App";

root.render(<App />);
