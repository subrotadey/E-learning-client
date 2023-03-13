import React, { useState } from "react";
// import { useLoaderData } from "react-router-dom";

import CourseBanner from "./CourseDetails/CourseBanner";
import CourseData from "./CourseDetails/CourseData";

const CourseDetails = () => {
  // const course = useLoaderData();
  // console.log(course);
  // const { img, heading, price, level, quiz, students, weeks } = course;
  const [selectedDate] = useState(new Date());

  return (
    <div className="lg:p-20">
      <CourseBanner selectedDate={selectedDate}></CourseBanner>
      <CourseData selectedDate={selectedDate}></CourseData>
    </div>
  );
};

export default CourseDetails;
