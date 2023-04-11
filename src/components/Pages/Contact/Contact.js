import React from "react";
import Particle from "../Shared/Particle/Particle";

const Contact = () => {
  return (
    <>
      
      <div className="text-light flex h-screen items-center justify-center ">
      <Particle />
        <div className="m-3 rounded-lg shadow-lg shadow-cyan-500/50 px-8">
          <div className="card glass m-5 w-72 md:w-72">
            <div className="card-body text-center px-8">
              <form>
                <h2 className="text-center text-xl">Contact Form</h2>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    {" "}
                    <span className="label-text">Your Message</span>
                  </label>
                  <input
                    type="text"
                    className="input-bordered input w-full max-w-xs"
                  />
                </div>
                <input
                  type="submit"
                  value="Send"
                  className="btn-accent btn w-full mt-4"
                />
                <div></div>
              </form>
              <div className="divider"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
