import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const CourseDetails = () => {
  const course = useLoaderData();

  const { img, heading, price } = course;

  const [selectedDate] = useState(new Date());

  return (
    <div className="pt-20">
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="course pic"
          />
          <div className="mx-6">
            <DayPicker mode="single" selected={selectedDate} />
          </div>
        </div>
      </div>
      <div className="text-center">
        <h2>Course Details</h2>
        <p>Your selected time {format(selectedDate, "PP")}</p>
        <h1>{heading}</h1>
        <small>price : {price}$</small>
      </div>
    </div>
  );
};

export default CourseDetails;
