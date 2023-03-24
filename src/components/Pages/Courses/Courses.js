import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import Course from "./Course";
import { BsSearch } from "react-icons/bs";

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
          <div className="lg:text-3xl text-2xl italic text-center">
              <p>Courses</p>
            </div>
          <div className="lg:mx-12 mx-3 flex justify-center  mt-4">
            {/* <div className="lg:text-3xl text-2xl italic ">
              <p>Courses</p>
            </div> */}
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-200">
              <BsSearch className="absolute w-5 h-5 ml-3 pointer-events-none"></BsSearch>
              <input
                type="search"
                name="search"
                placeholder="Type here"
                className="input w-full max-w-xs border-none font-semibold  ring-2 ring-gray-300 focus:ring-2 focus:ring-gray-500 pl-10 pr-3"
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
