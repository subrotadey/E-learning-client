import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";

const ManageTeachers = () => {
  const [deletingTeacher, setDeletingTeacher] = useState(null);
  const closeModal = () => {
    setDeletingTeacher(null);
  };
  const {
    data: teachers,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["teachers"],
    queryFn: async () => {
      try {
        const res = await fetch(
          "https://learning-server-site-three.vercel.app/teachers",
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

  const handleDeleteTeacher = (teacher) => {
    fetch(
      `https://learning-server-site-three.vercel.app/teachers/${teacher._id}`,
      {
        method: "DELETE",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.deletedCount > 0) {
          toast.success("Successfully Deleted Teacher");
          refetch();
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
      <h2 className="text-3xl">Manage Teachers: {teachers?.length}</h2>
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
              {teachers?.map((teacher, i) => (
                <tr key={teacher._id} className="hover">
                  <th>{i + 1}</th>
                  <th>
                    <div className="avatar">
                      <div className="w-12 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
                        <img src={teacher.img_link} alt="" />
                      </div>
                    </div>
                  </th>
                  <td>
                    {teacher.first_name} {teacher.last_name}
                  </td>
                  <td>
                    {teacher?.role !== "admin" && (
                      <label
                        onClick={() => setDeletingTeacher(teacher)}
                        htmlFor="confirmation-modal"
                        className="btn-error btn-sm btn"
                      >
                        Delete
                      </label>
                    )}
                  </td>
                  <td>
                    {/* <Link to={`/dashboard/updateCourse/${teacher._id}`}> */}
                    {<button className="btn-success btn-sm btn">Update</button>}
                    {/* </Link> */}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {deletingTeacher && (
        <ConfirmationModal
          title={`Are you sure want to delete this teacher?`}
          message={`If You delete ${deletingTeacher.first_name}. It cannot be undone`}
          successAction={handleDeleteTeacher}
          successButtonName="Delete"
          modalData={deletingTeacher}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default ManageTeachers;
