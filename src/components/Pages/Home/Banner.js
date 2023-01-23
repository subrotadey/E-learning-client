import React from "react";
import banner from "./../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div
      className="w-full h-full bg-no-repeat bg-cover overflow-x-hidden mt-16"
      style={{
        backgroundImage:
          "url('https://i.ibb.co/93Hrvxq/photo-1606327054536-e37e655d4f4a.jpg')",
      }}
    >
      <div className="hero min-h-screen px-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={banner} className="lg:max-w-sm md:max-w-sm sm:w-100 rounded-lg shadow-2xl" alt="" />
          <div className="dark:text-black">
            <h1 className="text-5xl font-bold">Your Learning Starts Here</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary text-white font-bold bg-gradient-to-r from-violet-500 to-fuchsia-500">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
