import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  const { _id, img, heading, price, details, teacher, designation } = course;
  // console.log(course);
  return (
    <figure className="rounded-xl bg-slate-100 p-8 dark:bg-slate-800 md:flex md:p-0 ">
      <img
        className="mx-auto h-24 w-24 bg-blue-500 transition  delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 md:h-auto md:w-48"
        src={img}
        alt=""
      />
      <div className="w-4/5 space-y-4 pt-6 text-center md:p-8 md:text-left	">
        <h2 className="text-lg font-medium">{heading}</h2>
        <blockquote>
          <p className=" font-medium">{details}</p>
        </blockquote>
        <figcaption className="font-medium">
          <div className="text-sky-500 dark:text-sky-400">{teacher}</div>
          <div className="text-slate-700 dark:text-slate-500">
            {designation}
          </div>
          <div className="card-actions ">
            <button className="btn-primary btn my-4">
              <Link to={`/course/${_id}`}>View Details</Link>
            </button>
          </div>
        </figcaption>
      </div>
      <span className="-mt-2 -mr-2 h-12 w-auto rounded-full bg-primary px-4 py-2 text-center text-white">
        ${price}
      </span>
    </figure>
  );
};

export default Course;
