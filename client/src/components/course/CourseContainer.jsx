import React, { useEffect, useState } from "react";
import ListCourses from "./ListCourses";
import axios from "axios";
import FilterCourse from "./FilterCourse";

export default function CourseContainer() {
  const [courses, setcourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      const url = `${import.meta.env.VITE_SERVER_URL}/courses`;

      const req = await axios.get(url);

      if (!req.data.error) {
        setcourses(req.data);
      }
    }

    getCourses();
  }, []);

  if (courses.length !== 0)
    return (
      <section className="p-6 space-y-6">
        <h1 className="font-bold text-xl">Courses</h1>
        <FilterCourse />
        <ListCourses courses={courses} />;
      </section>
    );

  return (
    <h1 className="text-center font-bold text-slate-500 text-xl p-6">
      No courses found
    </h1>
  );
}
