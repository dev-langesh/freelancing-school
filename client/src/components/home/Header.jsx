import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";

export default function Header() {
  const auth = useContext(AuthContext);

  function logout() {
    window.localStorage.removeItem("userId");
    window.location.href = "/login";
  }

  return (
    <div className="flex gap-4 justify-end py-4 px-6">
      {auth.logged ? (
        <>
          <a
            className="bg-blue-500  px-3 py-1 rounded hover:rounded-full"
            href="/"
          >
            Home
          </a>
          <a
            className="bg-blue-500  px-3 py-1 rounded hover:rounded-full"
            href="/account"
          >
            Account
          </a>
          <button
            onClick={logout}
            className="bg-blue-500  px-3 py-1 rounded hover:rounded-full"
          >
            Logout
          </button>
        </>
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
