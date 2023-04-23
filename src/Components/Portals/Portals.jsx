import React from "react";
import { createPortal } from "react-dom";

const Portals = ({ children }) => {
  return createPortal(
    <div className="fixed top-0 w-[100vw] h-[100vh] z-10 flex items-center justify-center">
      {children}
    </div>,
    document.getElementById("modal")
  );
};

export default Portals;
