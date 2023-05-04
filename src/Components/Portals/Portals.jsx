import React from "react";
import { createPortal } from "react-dom";

const Portals = ({ children, closeModal  }) => {
  return createPortal(
    <div onClick={closeModal} style={{ backgroundColor: 'rgba(0,0,0,.7)'}} className="fixed top-0 w-[100vw] h-[100vh]  z-10 flex items-center justify-center">
      {children}
    </div>,
    document.getElementById("modal")
  );
};

export default Portals;
