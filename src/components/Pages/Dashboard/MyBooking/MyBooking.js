import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";
import { Link } from "react-router-dom";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const url = `https://onlineeulogy.onrender.com/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url, {
        headers: {
          authorization: `bearer ${localStorage.getItem("accessToken")}`,
        },
      });
      const data = await res.json();
      return data;
    },
  });

  return (
    <div className="bg-white mt-28">
      <h3 className="mb-5 text-3xl">My Bookings</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>Serial No</th>
              <th>Name</th>
              <th>Course</th>
              <th>Date</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {bookings &&
              bookings?.map((booking, i) => (
                <tr key={booking._id} className="hover ">
                  <th>{i + 1}</th>
                  <td>{booking.userName}</td>
                  <td>{booking.courseName}</td>
                  <td>{booking.EnrollDate}</td>
                  <td>
                    {booking.price && !booking.paid && (
                      <Link to={`/dashboard/payment/${booking._id}`}>
                        <button className="btn-primary btn-sm btn">Pay</button>
                      </Link>
                    )}
                    {booking.price && booking.paid && (
                      <span className="btn-disabled btn-sm btn font-bold text-green-500">
                        Paid
                      </span>
                    )}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
