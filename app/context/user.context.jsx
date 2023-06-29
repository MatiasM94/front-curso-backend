"use client";

import { createContext, useState } from "react";

export const UserContext = createContext({});

export default function UserProvider({ children }) {
  const [userChange, setUserChange] = useState(0);

  return (
    <UserContext.Provider value={{ userChange, setUserChange }}>
      {children}
    </UserContext.Provider>
  );
}
