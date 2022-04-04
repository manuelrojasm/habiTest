import React, { createContext, useState } from "react";
import { ROUTES } from "../utils/constants";
import { sortArrayObject } from "../utils/utils";

export const DataContext = createContext();

export const UserProvider = ({ children }) => {
  const ordenateRoutes = sortArrayObject(ROUTES, "order");
  const [name, SetName] = useState(null);
  const [email, SetEmail] = useState(null);
  const [address, SetAddress] = useState(null);
  const [floor, SetFloor] = useState(1);
  const [commonArea, SetCommonArea] = useState(null);
  const [zonabbq, SetZonabbq] = useState(false);
  const [saloncomunal, SetSaloncomunal] = useState(false);
  const [parquedejuegos, SetParquedejuegos] = useState(false);

  let contextInfo = {
    routes: ordenateRoutes,
    name,
    email,
    address,
    floor,
    commonArea,
    zonabbq,
    saloncomunal,
    parquedejuegos,
    SetName,
    SetAddress,
    SetCommonArea,
    SetEmail,
    SetFloor,
    SetZonabbq,
    SetSaloncomunal,
    SetParquedejuegos
  };

  return (
    <DataContext.Provider value={contextInfo}>{children}</DataContext.Provider>
  );
};
