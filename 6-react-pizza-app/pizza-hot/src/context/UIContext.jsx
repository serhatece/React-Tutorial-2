import { createContext, useState } from "react";

export const UIContext = createContext();

export function UIContextProvider({ children }) {
  const [uiProgress, setUiProgress] = useState("");

  function showCart() {
    setUiProgress("cart");
  }

  function hideCart() {
    setUiProgress("");
  }

  function showCheckout() {
    setUiProgress("checkout");
  }

  function hidecheckout() {
    setUiProgress("");
  }

  const uiProgressContext = {
    uiProgress,
    showCart,
    hideCart,
    showCheckout,
    hidecheckout,
  };

  return (
    <UIContext.Provider value={uiProgressContext}>
      {children}
    </UIContext.Provider>
  );
}
