import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-hot-toast";

const AllUsers = () => {
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch(
        "https://learning-server-site-subrotadey540-gmailcom.vercel.app/users"
      );
      const data = await res.json();
      return data;
    },
  });

  const handleMakeAdmin = (id) => {
    fetch(
      `https://learning-server-site-subrotadey540-gmailcom.vercel.app/users/admin/${id}`,
      {
        method: "PUT",
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          toast.success("Make Admin successful");
          refetch();
        }
      });
  };
  return (
    <div>
      <h3 className="mb-5 text-3xl">All Users</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Users Email</th>
              <th>Admin</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, i) => (
              <tr key={user._id} className="hover">
                <th>{i + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  {user?.role !== "admin" && (
                    <button
                      onClick={() => handleMakeAdmin(user._id)}
                      className="btn-primary btn-xs btn"
                    >
                      Make Admin
                    </button>
                  )}
                </td>
                <td>
                  <button className="btn-xs btn bg-red-800">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
<h2>All Users</h2>;
