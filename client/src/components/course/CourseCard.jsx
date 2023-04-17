import React, { useContext, useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { IconButton } from "@mui/material";
import { AuthContext } from "../../context/AuthContextProvider";
import axios from "axios";
import ErrorHandler from "../handlers/ErrorHandler";
import SuccessHandler from "../handlers/SuccessHandler";

export default function CourseCard({ num, code, name, description, credits }) {
  const auth = useContext(AuthContext);
  const [error, setError] = useState({ message: "", open: false });
  const [success, setSuccess] = useState({ message: "", open: false });

  async function registerInCourse() {
    const url = `${import.meta.env.VITE_SERVER_URL}/account/${
      auth.userId
    }/courses/add`;

    const payload = {
      course: {
        num,
        code,
        name,
        description,
        credits,
      },
    };

    const req = await fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await req.json();

    if (data.error) {
      setError({ open: true, message: data.error });
    } else {
      setSuccess({ open: true, message: data.message });
    }
  }

  return (
    <section className="w-full shadow-xl shadow-black border-l-4 border-blue-400 p-4">
      <h1 className="text-blue-500 font-bold">{name}</h1>

      <p className="text-slate-400 text-sm">{description}</p>

      <div className="flex items-center gap-10 pt-4">
        <p className="text-slate-500 font-bold text-sm">
          Course code: <span className="text-slate-300">{code}</span>
        </p>
        <p className="text-slate-500 font-bold text-sm">
          Course number: <span className="text-slate-300">{num}</span>
        </p>
        {auth.logged && (
          <IconButton onClick={registerInCourse} sx={{ color: "white" }}>
            <AddIcon />
          </IconButton>
        )}
      </div>

      <ErrorHandler error={error} setError={setError} />
      <SuccessHandler success={success} setSuccess={setSuccess} />
    </section>
  );
}
