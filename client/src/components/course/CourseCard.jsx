import React from "react";

export default function CourseCard({ num, code, name, description }) {
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
      </div>
    </section>
  );
}
