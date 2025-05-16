
import React, { createContext, useContext, useState } from "react";

const TooltipContext = createContext({});
export const TooltipProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <TooltipContext.Provider value={{ open, setOpen }}>
      {children}
    </TooltipContext.Provider>
  );
};

export default TooltipContext;
