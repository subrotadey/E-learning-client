import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import Course from "./Course";

const Courses = () => {
  const courses = useLoaderData();
  const [query, setQuery] = useState("");

  // console.log(courses.filter(course => course.heading.toLowerCase().includes(query)));
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <div className="flex items-center justify-center pt-20">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="my-12">
          <div className="mx-12 flex justify-between">
            <div className="text-3xl italic ">
              <p>Courses</p>
            </div>
            <div>
              <input
                type="text"
                placeholder="Type here"
                className="input-bordered input-primary input w-full  max-w-xs"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="divider"></div>
          <div className="mx-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {courses
              .filter((course) => course.heading.toLowerCase().includes(query))
              .map((course) => (
                <Course key={course._id} course={course}></Course>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
