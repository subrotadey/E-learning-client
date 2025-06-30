import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";

const Course = ({ course }) => {
  const { _id, img, heading, price, teacher, designation, level, weeks, lesson, quiz, students } = course;
  const [average, setAverage] = useState(0);

  useEffect(() => {
    fetch(`https://onlineeulogy.onrender.com/reviews/average/${_id}`)
      .then(res => res.json())
      .then(data => {
        setAverage(data?.averageRating || 0);
      });
  }, [_id]);

  const tooltipId = `clickable-${_id}`;

  return (
    <div className="relative w-9/12 group mx-auto my-4">
      {/* Tooltip Trigger */}
      <div
        id={tooltipId}
        className="card bg-base-100 shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer"
      >
        <figure>
          <img src={img} alt={heading} className="h-40 w-full object-cover" />
        </figure>
        <div className="card-body p-4">
          <h2 className="card-title text-sm leading-tight">{heading}</h2>
          <p className="text-xs text-gray-500">by {teacher}</p>
          <p className="text-xs text-gray-500">{designation}</p>
          <div className="flex justify-between items-center mt-2">
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className={i < Math.round(average) ? "" : "text-gray-300"} />
                ))}
              </div>
            </div>
            <span className="font-bold">${price}</span>
          </div>
        </div>
      </div>

      <Tooltip
        anchorSelect={`#${tooltipId}`}
        place="right"
        clickable
        className="z-50 max-w-xs !rounded-xl !p-4 !bg-base-100 !border !border-gray-300 !shadow-lg text-left"
      >
        <p className="text-success text-xs font-semibold">Course Overview</p>
        <p className="font-bold mt-1 mb-2">{heading}</p>
        <ul className="text-sm  space-y-1 list-disc list-inside">
          <li><strong>Instructor:</strong> {teacher}, {designation}</li>
          <li><strong>Level:</strong> {level}</li>
          <li><strong>Duration:</strong> {weeks} weeks</li>
          <li><strong>Lessons:</strong> {lesson}</li>
          <li><strong>Quizzes:</strong> {quiz}</li>
          <li><strong>Students:</strong> {students} enrolled</li>
          <li><strong>Price:</strong> ${price}</li>
        </ul>
        <button className="btn-primary btn my-4">

          <Link to={`/course/${_id}`}>View Details</Link>
        </button>
      </Tooltip>

    </div>
  );
};

export default Course;