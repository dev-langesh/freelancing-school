import React from "react";

export default function CourseCard({ num, code, name, description }) {
  return (
    <div className="w-full shadow-xl shadow-black border-l-4 border-blue-400 p-4">
      <h1 className="text-blue-500 font-bold">{name}</h1>

      <p className="text-slate-400 text-sm">{description}</p>
    </div>
  );
}
