import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";
import { BsClock } from 'react-icons/bs';
import { GiNetworkBars } from 'react-icons/gi';
import { MdQuiz } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';

const CourseDetails = () => {
  const course = useLoaderData();
  // console.log(course);
  const { img, heading, price, level, quiz, students, weeks } = course;
  const [selectedDate] = useState(new Date());

  return (
    <div className="p-20">
      <h2 className="text-center text-3xl	font-medium">Course Details</h2>
      <div className="divider"></div>
      <div className="hero ">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img
            src={img}
            className="max-w-sm rounded-lg shadow-2xl"
            alt="course pic"
          /> */}
          <div className="card bg-base-100 shadow-xl">
            <figure><img className="rounded-lg" src={img} alt="Album"/></figure>
            <div className="card-body">
              <h2 className="card-title">{heading}</h2>
              <p>Price: {price} $</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="mx-6">
            <DayPicker mode="single" selected={selectedDate} />
          </div>
        </div>
      </div>
      {/* <div className="flex ">
        <img className="mr-4 w-16 rounded-full" src={img} alt="" />
        <div>
          <h1>Instructor</h1>
          <h1>name</h1>
        </div>
      </div> */}
      <div className="text-center">
        <p className="text-2xl font-bold">{format(selectedDate, "PP")}</p>
        {/* <h1 className="text-xl">{heading}</h1> */}
        <div className="divider mx-auto w-1/2"></div>
        <div className="flex justify-evenly">
          <div className="flex text-lg"><BsClock className="mr-3 my-auto "></BsClock><p>Weeks: {weeks}</p></div>
          <div className="flex text-lg"><GiNetworkBars className="mr-3 my-auto "> </GiNetworkBars><p>Level: {level}</p></div>
          <div className="flex text-lg"><MdQuiz className="mr-3 my-auto "> </MdQuiz><p>Quiz: {quiz}</p></div>
          <div className="flex text-lg"><FaUserGraduate className="mr-3 my-auto "> </FaUserGraduate><p>Students: {students}</p></div>
        </div>
        <small></small>
      </div>
    </div>
  );
};

export default CourseDetails;
