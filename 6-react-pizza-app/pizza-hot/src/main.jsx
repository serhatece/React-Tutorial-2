import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { CartContextProvider } from "./context/CartContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <CartContextProvider>
        <App />
      </CartContextProvider>
    </ThemeProvider>
  </StrictMode>
);
