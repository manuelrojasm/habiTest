import React, { createContext, useState } from "react";
import { ROUTES } from "../utils/constants";
import { sortArrayObject } from "../utils/utils";

export const DataContext = createContext();

export const UserProvider = ({ children }) => {
  const ordenateRoutes = sortArrayObject(ROUTES, "order");
  const [data, SetData] = useState();
  let contextInfo = {
    routes: ordenateRoutes
  }
  return (
    <DataContext.Provider value={contextInfo}>
      {children}
    </DataContext.Provider>
  );
};
