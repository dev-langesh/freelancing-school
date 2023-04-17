import React, { useContext, useEffect, useState } from "react";
import ErrorHandler from "../handlers/ErrorHandler";
import SuccessHandler from "../handlers/SuccessHandler";
import ListCourses from "../course/ListCourses";
import { AuthContext } from "../../context/AuthContextProvider";
import axios from "axios";

export default function Account({ num, code, name, description, credits }) {
  const [error, setError] = useState({ message: "", open: false });
  const [success, setSuccess] = useState({ message: "", open: false });
  const [courses, setCourses] = useState([]);
  const [user, setUser] = useState({});

  const auth = useContext(AuthContext);

  useEffect(() => {
    async function getCourses() {
      const url = `${import.meta.env.VITE_SERVER_URL}/account/${auth.userId}`;

      if (auth.userId) {
        const req = await axios.get(url);

        console.log(req.data);

        if (!req.data.error) {
          setCourses(req.data.user.courses);
          setUser(req.data.user);
        }
      }
    }

    getCourses();
  }, [auth.userId]);

  return (
    <div className="space-y-6 p-6">
      <h1 className="text-center font-bold text-2xl text-blue-600">Account</h1>

      <p className="text-slate-500 text-lg">
        Username :{" "}
        <span className="font-bold text-slate-400">{user.username}</span>
      </p>

      <h1 className="font-bold text-xl">Enrolled Courses</h1>

      <ListCourses mode="remove" courses={courses} />
      <ErrorHandler error={error} setError={setError} />
      <SuccessHandler success={success} setSuccess={setSuccess} />
    </div>
  );
}
