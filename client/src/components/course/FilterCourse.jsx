import React from "react";
import Button from "../home/Button";

export default function FilterCourse() {
  return (
    <form>
      {/* <h1>Filters</h1> */}

      <section className="flex gap-6 items-center">
        <div>
          <label htmlFor="" className="pr-2 text-slate-400">
            Code
          </label>
          <input type="text" className="border bg-gray-900 w-28 text-white" />
        </div>
        <div>
          <label htmlFor="" className="pr-2 text-slate-400">
            Number
          </label>
          <input
            type="text"
            className="border bg-transparent w-28 text-white"
          />
        </div>

        <Button type="submit" text="Filter" />
      </section>
    </form>
  );
}
