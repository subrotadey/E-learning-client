import React from "react";
import entry from "./../../assets/images/entry.png";

const Login = () => {
  return (
    <div className="flex h-screen items-center justify-center overflow-x-none">
      <div>
        <img className="w-9/12 text-white" src={entry} alt="" />
      </div>
      <div className="text-3xl">
        <div className="text-center my-28">
          <button className="btn outline-double">Registration</button>
        </div>
        {/* <div className="divide-y divide-blue-200"></div> */}
        <div className="flex justify-around gap-8 ">
          <button className="btn bg-accent-focus outline-double">
            Admin Login
          </button>
          <button className="btn outline-double">Teachers Login</button>
          <button className="btn outline-double">Students Login</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
