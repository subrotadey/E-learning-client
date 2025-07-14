import React from "react";
import { Link } from "react-router-dom";
import '../CommonCard.css'

const Teacher = ({ teacher }) => {

  const {_id, img_link, first_name, last_name,designation } = teacher;
  return (
    <Link to={`/teachers/${_id}`} className="hover:tooltip hover:tooltip-open hover:tooltip-right" data-tip="Click for Details">
      <div className="card h-full  shadow-xl book-cover">
        <figure>
          <div className="avatar ">
            <div className="w-48 rounded-xl parentCard">
              <img src={img_link} alt="" className="childCard"/>
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
