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
      <ListCourses courses={courses} />
    </section>
  );
}
