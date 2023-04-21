import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Components/App";
import { inject } from "@vercel/analytics";

inject();

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(<App />);
