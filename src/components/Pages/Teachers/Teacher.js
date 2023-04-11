import React from "react";
import { Link } from "react-router-dom";

const Teacher = ({ teacher }) => {

  const {_id, img_link, first_name, last_name,designation } = teacher;
  return (
    <Link to={`/teachers/${_id}`} className="hover:tooltip hover:tooltip-open hover:tooltip-right" data-tip="Click for Details">
      <div className="card h-full bg-base-100 shadow-xl">
        <figure>
          <div className="avatar">
            <div className="w-48 rounded-xl">
              <img src={img_link} alt=""/>
            </div>
          </div>
        {/* <img src={img_link} alt="Album" className="scale-75" /> */}
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
