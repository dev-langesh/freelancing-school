import React, { useState } from "react";
import Button from "../home/Button";
import ErrorHandler from "../handlers/ErrorHandler";

export default function Login() {
  const [formData, setFormdata] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState({ message: "", open: false });

  function changeHandler(e) {
    setFormdata((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function submitHandler(e) {
    e.preventDefault();

    let url = `${import.meta.env.VITE_SERVER_URL}/user/login`;

    const req = await fetch(url, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await req.json();

    if (data.error) {
      setError({ open: true, message: data.error });
    } else {
      console.log(data);

      window.localStorage.setItem("userId", data.userId);

      window.location.href = "/";
    }
  }

  return (
    <div className="pt-20 w-full flex items-center justify-center">
      <form
        onSubmit={submitHandler}
        className=" p-6 shadow-xl shadow-black flex items-center flex-col gap-6"
      >
        <h1 className="font-bold text-2xl text-center">Login</h1>
        <input
          type="text"
          name="username"
          onChange={changeHandler}
          className="px-2 py-1 bg-transparent border border-slate-400 placeholder:text-slate-400 outline-none focus:border-white"
          placeholder="Username"
        />
        <input
          type="password"
          name="password"
          onChange={changeHandler}
          className="px-2 py-1 bg-transparent border border-slate-400 placeholder:text-slate-400 outline-none focus:border-white"
          placeholder="Password"
        />
        <Button type="submit" text="Submit" />
        <ErrorHandler error={error} setError={setError} />

        <div className="w-full flex gap-6">
          <p className="text-slate-500">Don't have an account?</p>
          <a className="text-blue-500" href="/signup">
            Signup
          </a>
        </div>
      </form>
    </div>
  );
}
