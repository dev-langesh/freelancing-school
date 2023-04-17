import React from "react";
import CourseCard from "./CourseCard";

export default function ListCourses({ courses }) {
  return (
    <section className="flex flex-col gap-6">
      {courses.map((course) => {
        return <CourseCard key={course._id} {...course} />;
      })}
    </section>
  );
}
