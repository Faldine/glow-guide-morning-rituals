
import React from "react";

export const Toaster = () => {
  return <div id="sonner-container" />;
};

export const toast = {
  success: (message) => console.log("Success toast:", message),
  error: (message) => console.log("Error toast:", message),
  info: (message) => console.log("Info toast:", message),
  warning: (message) => console.log("Warning toast:", message)
};

export default Toaster;
