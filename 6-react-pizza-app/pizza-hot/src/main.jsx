import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import App from "./App";
import { ThemeProvider } from "./context/ThemeContext";
import { CartContextProvider } from "./context/CartContext";
import { UIContextProvider } from "./context/UIContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UIContextProvider>
      <ThemeProvider>
        <CartContextProvider>
          <App />
        </CartContextProvider>
      </ThemeProvider>
    </UIContextProvider>
  </StrictMode>
);
