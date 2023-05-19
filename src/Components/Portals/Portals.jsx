import React from "react";
import { createPortal } from "react-dom";

const Portals = ({ children, closeModal  }) => {
  return createPortal(
    <div onClick={closeModal} style={{ backgroundColor: 'rgba(0,0,0,.7)'}} className="fixed top-0 w-[100%] h-[100%] z-10 flex items-center justify-center overflow-y-scroll sm:overflow-y-none">
      {children}
    </div>,
    document.getElementById("modal")
  );
};

export default Portals;
