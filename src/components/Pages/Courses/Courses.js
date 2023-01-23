import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import Course from "./Course";

const Courses = () => {
  const courses = useLoaderData();
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
        <div>
          <div className="mx-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {courses.map((course) => (
              <Course key={course._id} course={course}></Course>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Courses;
