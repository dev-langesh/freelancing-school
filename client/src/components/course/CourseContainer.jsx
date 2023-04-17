import React, { useEffect, useState } from "react";
import ListCourses from "./ListCourses";
import axios from "axios";
import FilterCourse from "./FilterCourse";

export default function CourseContainer() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    async function getCourses() {
      const url = `${import.meta.env.VITE_SERVER_URL}/courses`;

      const req = await axios.get(url);

      if (!req.data.error) {
        setCourses(req.data);
      }
    }

    getCourses();
  }, []);

  return (
    <section className="p-6 space-y-6">
      <h1 className="font-bold text-xl">Courses</h1>
      <FilterCourse setCourses={setCourses} />
      {courses.length !== 0 ? (
        <ListCourses courses={courses} />
      ) : (
        <h1 className="text-center font-bold text-slate-500 text-xl p-6">
          No courses found
        </h1>
      )}
    </section>
  );
}
