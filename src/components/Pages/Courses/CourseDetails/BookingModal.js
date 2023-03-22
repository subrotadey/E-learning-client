import { format } from "date-fns";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { AuthContext } from "../../../../contexts/AuthProvider";

const BookingModal = ({selectedDate, heading}) => {

    const date = format(selectedDate, "PP");

    const {user} = useContext(AuthContext)

    console.log(user);

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const heading = form.heading.value;
        // const date = form.date.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;


        const booking ={
            EnrollDate: date,
            courseName: heading,
            userName: name,
            email,
            phone
        }
        console.log(booking);

        fetch('http://localhost:5000/bookings', {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if(data.acknowledged){
            toast.success('Booking Confirmed')
          }
          else{
            toast.error(data.message)
          }
        })
    }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
          <h3 className="text-lg font-bold">Welcome</h3>
          <form onSubmit={handleBooking} action="">
              <input name="heading" type="text" className="input input-bordered input-info w-full mt-4" value={heading} disabled />
              <input name="date" type="text" className="input input-bordered input-info w-full  mt-4" value={date} disabled />
              <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered input-info w-full mt-4" />
              <input name="email" type="email" defaultValue={user?.email} disabled placeholder="Your Email" className="input input-bordered input-info w-full mt-4" />
              <input name="phone" type="text" placeholder="Your Phone Number" className="input input-bordered input-info w-full  mt-4"  />
              <input type="submit" value="Submit" className="btn btn-info mt-4 w-full max-w"/>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
