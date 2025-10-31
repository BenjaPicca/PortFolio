import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css"; // estilos (Tailwind o tus CSS)
import App from "./App"; // importa tu portfolio

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
