import React from "react";

const context = {
  isAuthenticated: false,
  setIsAuthenticated: (value) => {}
}

export const AppContext = React.createContext(context);