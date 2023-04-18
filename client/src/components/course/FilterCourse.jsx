import React, { useState } from "react";
import Button from "../home/Button";
import axios from "axios";

const initialFilter = {
  code: "",
  num: "",
};

export default function FilterCourse({ setCourses }) {
  const [filter, setFilter] = useState(initialFilter);

  function changeHandler(e) {
    setFilter((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  }

  async function getCourses() {
    let url = `${import.meta.env.VITE_SERVER_URL}/courses/?`;

    if (filter.code && filter.num) {
      url += `code=${filter.code}&&num=${filter.num}`;
    } else if (filter.num) {
      url += `num=${filter.num}`;
    } else if (filter.code) {
      url += `code=${filter.code}`;
    }

    const req = await axios.get(url);

    if (!req.data.error) {
      setCourses(req.data);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    getCourses();
  }

  function clearFilter() {
    setFilter(initialFilter);
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* <h1>Filters</h1> */}

      <section className="w-full flex items-center justify-between">
        <section className="flex gap-6 items-center">
          <div>
            <label htmlFor="" className="pr-2 text-slate-400">
              Code
            </label>
            <input
              name="code"
              onChange={changeHandler}
              type="text"
              className="border bg-gray-900 w-28 text-white border-slate-500 px-1"
            />
          </div>
          <div>
            <label htmlFor="" className="pr-2 text-slate-400">
              Number
            </label>
            <input
              type="text"
              name="num"
              onChange={changeHandler}
              className="border bg-transparent w-28 text-white border-slate-500 px-1"
            />
          </div>

          <Button type="submit" text="Filter" />
          <Button onClick={clearFilter} type="submit" text="Clear Filter" />
        </section>
        <a
          className="bg-blue-500  px-3 py-1 rounded hover:rounded-full"
          href="/add-course"
        >
          Add New Course
        </a>
      </section>
    </form>
  );
}
