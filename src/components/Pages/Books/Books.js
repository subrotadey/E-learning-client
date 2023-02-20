import React from "react";
import bgbook from "../../assets/images/book3.jpg";

const Books = () => {
  return (
    <div
      className="h-full w-full overflow-x-hidden bg-cover bg-no-repeat"
      style={{
        background: `url(${bgbook})`,
        backgroundSize: "cover",
      }}
    >
      <div className="hero min-h-screen px-12">
        <div className="hero-content flex-col lg:flex-row-reverse">
          {/* <img src={banner} className="lg:max-w-sm md:max-w-sm sm:w-100 rounded-lg shadow-2xl" alt="" /> */}
          <div className="dark:text-black">
            <h1 className="text-5xl font-bold">Books were safer than other people anyway</h1>
            <p className="py-6">
              Neil Gaiman, The Ocean at the End of the Lane
            </p>
            <button className="btn-primary btn bg-gradient-to-r from-violet-500 to-fuchsia-500 font-bold text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
