import React from "react";
// import Particle from "../Shared/Particle/Particle";
import image from "../../assets/images/contact_us.gif";

const Contact = () => {
  return (
    <div className="">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 h-screen  justify-items-center content-center">
        {/* <Particle /> */}
        <div className=" self-center">
          <img
            src={image}
            alt="book cover page"
            className="w-fit"
          />
        </div>
        <div className="rounded-lg px-8 shadow-lg shadow-cyan-500/50">
          <div className="card glass m-5 ">
            <div className="card-body px-8 text-center">
              <form>
                <h2 className="my-4 text-center text-3xl text-black ">
                  Contact Form
                </h2>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    {" "}
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="name"
                    placeholder="Your name"
                    className="input-bordered input-accent input  w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Type here"
                    className="input-bordered input-accent input  w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    {" "}
                    <span className="label-text">Your Message</span>
                  </label>
                  <textarea
                    className="textarea-accent textarea"
                    placeholder="Write here..."
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Send"
                  className="btn-accent btn mt-4 w-full"
                />
              </form>
              <small>Thank you</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
