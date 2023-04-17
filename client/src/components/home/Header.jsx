import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

export default function Header() {
  const auth = useContext(AuthContext);

  function logout() {
    window.localStorage.removeItem("userId");
    window.location.reload();
  }

  return (
    <div className="flex justify-end py-4 px-6">
      {auth.logged ? (
        <button
          onClick={logout}
          className="bg-blue-500  px-3 py-1 rounded hover:rounded-full"
        >
          Logout
        </button>
      ) : (
        <a
          className="bg-blue-500  px-3 py-1 rounded hover:rounded-full"
          href="/login"
        >
          Login
        </a>
      )}
    </div>
  );
}
