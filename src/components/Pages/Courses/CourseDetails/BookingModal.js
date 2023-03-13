import { format } from "date-fns";
import React from "react";

const BookingModal = ({selectedDate, heading}) => {

    const date = format(selectedDate, "PP");

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const heading = form.heading.value;
        // const date = form.date.value;
        const name = form.name.value;
        const email = form.email.value;
        const phone = form.phone.value;


        const enrollment ={
            EnrollDate: date,
            courseName: heading,
            userName: name,
            email,
            phone
        }

        console.log(enrollment);
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
              <input name="name" type="text" placeholder="Your Name" className="input input-bordered input-info w-full mt-4" />
              <input name="email" type="email" placeholder="Your Email" className="input input-bordered input-info w-full mt-4" />
              <input name="phone" type="text" placeholder="Your Phone Number" className="input input-bordered input-info w-full  mt-4"  />
              <input type="submit" value="Submit" className="btn btn-info mt-4 w-full max-w"/>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
