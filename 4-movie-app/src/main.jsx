import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import StartRating from "./StartRating.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    {/* <StartRating maxRating={5} color="red" />
    <StartRating maxRating={5} />
    <StartRating size={20} /> */}
  </StrictMode>
);
