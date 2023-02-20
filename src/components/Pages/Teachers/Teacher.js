import React from "react";
import { Link } from "react-router-dom";

const Teacher = ({ teacher }) => {
  // console.log(teacher);

  const {_id, img_link, first_name, last_name,designation } = teacher;
  return (
    <Link to={`/teacher/${_id}`} className="hover:tooltip hover:tooltip-open hover:tooltip-right" data-tip="Click for Details">
      <div className="card h-full bg-base-100 shadow-xl bg-white">
        <figure>
        <img src={img_link} alt="Album" className="scale-75" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{first_name} {last_name}</h2>
          <small className="card-title">{designation}</small>
        </div>
      </div>
    </Link>
  );
};

export default Teacher;
