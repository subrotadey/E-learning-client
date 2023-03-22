import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../../contexts/AuthProvider";

const MyBooking = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;


  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data; 
    },
  });

  return (
    <div>
      <h3 className="mb-5 text-3xl">My Bookings</h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Course</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, i) => (
              <tr key={booking._id} className="hover">
                <th>{i+1}</th>
                <td>{booking.userName}</td>
                <td>{booking.courseName}</td>
                <td>{booking.EnrollDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyBooking;
