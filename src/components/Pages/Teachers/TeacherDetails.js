import React from "react";
import { useLoaderData } from "react-router-dom";

const TeacherDetails = () => {
  const teacher = useLoaderData();
  const { img_link, first_name, last_name } = teacher;
  return (
    <div className="flex w-screen justify-center overflowHidden">
      <div>
        <h2 className="pt-20">Teachers Details</h2>
        <img src={img_link} alt="" />
        <h1>
          {first_name} {last_name}
        </h1>
      </div>
    </div>
  );
};

export default TeacherDetails;
