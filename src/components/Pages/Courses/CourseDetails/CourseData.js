import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { BsClock } from "react-icons/bs";
import { GiNetworkBars } from "react-icons/gi";
import { MdQuiz } from "react-icons/md";
import { FaUserGraduate } from "react-icons/fa";
import BookingModal from "./BookingModal";

const CourseData = ({selectedDate}) => {
  const course = useLoaderData();
  
  const { img, heading, price, level, quiz, students, weeks } = course;

  return (
    <div>
      {/* <div className="flex ">
        <img className="mr-4 w-16 rounded-full" src={img} alt="" />
        <div>
          <h1>Instructor</h1>
          <h1>name</h1>
        </div>
      </div> */} 
      <div className="text-center">
        <div className="justify-evenly px-2 text-white lg:flex">
          <div>
            {/* <p className="text-2xl font-bold">{format(selectedDate, "PP")}</p> */}
            <h2 className="text-2xl">{heading}</h2>
            {/* <p>Price: {price} $</p> */}
            {/* <h1 className="text-xl">{heading}</h1> */}
          </div>
          <div>
            <label htmlFor="booking-modal" className="btn-primary btn my-3">Enroll Now</label>
            <BookingModal selectedDate={selectedDate} heading={heading}></BookingModal>
          </div>
        </div>
        <div className="divider mx-auto w-1/2"></div>
        <div className="grid grid-cols-2 gap-4 text-white lg:grid-cols-4">
          <div className="mx-auto flex  text-lg">
            <BsClock className="my-auto mr-3 "></BsClock>
            <p>Weeks: {weeks}</p>
          </div>
          <div className="mx-auto flex  text-lg">
            <GiNetworkBars className="my-auto mr-3 "> </GiNetworkBars>
            <p>Level: {level}</p>
          </div>
          <div className="mx-auto flex  text-lg">
            <MdQuiz className="my-auto mr-3 "> </MdQuiz>
            <p>Quiz: {quiz}</p>
          </div>
          <div className="mx-auto flex  text-lg">
            <FaUserGraduate className="my-auto mr-3 "> </FaUserGraduate>
            <p>Students: {students}</p>
          </div>
        </div>
        <small></small>
      </div>
    </div>
  );
};

export default CourseData;
