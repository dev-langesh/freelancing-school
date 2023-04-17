import React, { useEffect, useState } from "react";
import CourseCard from "./CourseCard";

let id = 0;

export default function ListCourses({ courses, mode }) {
  const [courseData, setCourses] = useState([]);

  useEffect(() => {
    setCourses(courses);
  }, [courses]);

  if (courseData.length === 0)
    return (
      <h1 className="text-center font-bold text-slate-500 text-xl p-6">
        No courses found
      </h1>
    );
  return (
    <section className="flex flex-col gap-6">
      {courseData.map((course) => {
        return (
          <CourseCard
            setCourses={setCourses}
            mode={mode}
            key={course._id ? course._id : ++id}
            {...course}
          />
        );
      })}
    </section>
  );
}
