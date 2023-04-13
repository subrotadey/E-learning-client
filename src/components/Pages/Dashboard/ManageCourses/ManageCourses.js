import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const ManageCourses = () => {
  const [deletingCourse, setDeletingCourse] = useState(null);
  const closeModal = () => {
    setDeletingCourse(null);
  };
  const {
    data: courses,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["courses"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://learning-server-site-subrotadey540-gmailcom.vercel.app/courses",
          {
            headers: {
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.log(error);
      }
    },
  });

  const handleDeleteCourse = (course) => {
    fetch(
      `https://learning-server-site-subrotadey540-gmailcom.vercel.app/courses/${course._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.deletedCount > 0) {
          refetch();
          toast.success(`${course.heading} Successfully Deleted!`);
        } else {
          toast.error(result.message);
        }
      });
  };
  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-3xl">Available Courses: {courses.length}</h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr>
                <th>Serial No</th>
                <th>Avatar</th>
                <th>Course Name</th>
                <th>Delete Course</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {courses.map((course, i) => (
                <tr key={course._id} className="hover">
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
                    <Link to={`/dashboard/updateCourse/${course._id}`}>
                      {
                        <button className="btn-success btn-sm btn">
                          Update
                        </button>
                      }
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingCourse && (
        <ConfirmationModal
          title={`Are you sure want to delete this Course?`}
          message={`If You delete ${deletingCourse.heading}. It cannot be undone`}
          successAction={handleDeleteCourse}
          successButtonName="Delete"
          modalData={deletingCourse}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageCourses;
