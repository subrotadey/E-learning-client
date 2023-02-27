import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  console.log(course);

  const {_id, img, heading, price } = course;
  return (
    <div className="pt-20 ">
      <div className="card h-full bg-base-100 shadow-xl lg:card-side bg-white">
        <figure>
          <img src={img} alt="Album" />
        </figure>
        
        <div className="card-body">
          <h2 className="card-title">{heading}</h2>
          
          {/* <h2 className="card-title">{last_name}</h2> */}
          <p>Price: ${price}</p>
          <div className="card-actions justify-end">
            <button className="btn-primary btn"><Link to={`/course/${_id}`}>View Details</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
