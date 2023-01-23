import React from "react";
import { Link } from "react-router-dom";

const Teacher = ({ teacher }) => {
  // console.log(teacher);

  const {_id, img_link, first_name, last_name } = teacher;
  return (
    <div>
      <div className="card h-full bg-base-100 shadow-xl lg:card-side">
        <figure>
          <img src={img_link} alt="Album" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{first_name}</h2>
          <h2 className="card-title">{last_name}</h2>
          {/* <p>Price: ${price}</p> */}
          <div className="card-actions justify-end">
            <button className="btn-primary btn"><Link to={`/teacher/${_id}`}>View Details</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teacher;
