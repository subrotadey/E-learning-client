import React from "react";
import { useState } from "react";
import UpdateCourseModal from "./UpdateCourseModal";

const ManageCourse = ({ course, i, setDeletingCourse }) => {
  const [updateCourse, setUpdateCourse] = useState(null);
  return (
    <>
      <tr className="hover">
        <th>{i + 1}</th>
        <th>
          <div className="avatar">
            <div className="w-12 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <img src={course.img} alt="" />
            </div>
          </div>
        </th>
        <td>{course.heading}</td>
        <td>
          {course?.role !== "admin" && (
            <label
              onClick={() => setDeletingCourse(course)}
              htmlFor="confirmation-modal"
              className="btn-error btn-sm btn"
            >
              Delete
            </label>
          )}
        </td>
        <td>
          {
            <label
              onClick={() => setUpdateCourse(course)}
              htmlFor="update-course-modal"
              className="btn-success btn-sm btn"
            >
              Update
            </label>
          }
        </td>
      </tr>
      {updateCourse && (
        <UpdateCourseModal
          updateCourse={updateCourse}
          setUpdateCourse={setUpdateCourse}
        ></UpdateCourseModal>
      )}
    </>
  );
};

export default ManageCourse;
