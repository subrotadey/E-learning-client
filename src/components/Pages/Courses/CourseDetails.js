import { useState } from "react";
import CourseBanner from "./CourseDetails/CourseBanner";
import CourseData from "./CourseDetails/CourseData";
import CourseReviews from "./CourseReviews/CourseReviews";

const CourseDetails = () => {
  const [selectedDate] = useState(new Date());

  return (
    <div className="lg:p-20">
      <CourseBanner selectedDate={selectedDate}></CourseBanner>
      <CourseData selectedDate={selectedDate}></CourseData>
      <CourseReviews></CourseReviews>
    </div>
  );
};

export default CourseDetails;
