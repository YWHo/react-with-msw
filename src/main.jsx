import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

async function deferRender() {
  // if (process.env.NODE_ENV != 'development') {
  //   return;
  // }
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

deferRender().then(() => {
  createRoot(document.getElementById("root")).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
});
