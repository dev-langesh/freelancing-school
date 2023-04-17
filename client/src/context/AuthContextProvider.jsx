import React, { useEffect, useState } from "react";

const initialState = { logged: false, userId: "" };

export const AuthContext = React.createContext(initialState);

export default function AuthContextProvider({ children }) {
  const [auth, setAuth] = useState(initialState);

  useEffect(() => {
    const userId = window.localStorage.getItem("userId");

    if (userId) {
      setAuth({
        logged: true,
        userId,
      });
    }
  }, []);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}
