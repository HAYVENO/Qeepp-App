import ReactDOM from "react-dom/client";
import App from "./App";
import { inject } from "@vercel/analytics";

inject();

const rootElement = document.getElementById("root");

if (rootElement) {
	ReactDOM.createRoot(rootElement).render(<App />);
}
