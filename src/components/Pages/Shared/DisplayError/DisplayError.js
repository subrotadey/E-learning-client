import React from "react";
import { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="align-center flex h-screen justify-center text-center">
      <div>
        <p className="text-red-500">Something Went Wrong!</p>
        <p className="text-red-400">{error.statusText || error.message}</p>
        <h4 className="text-3xl">
          {" "}
          Please{" "}
          <button onClick={handleLogOut} className="btn mx-1">
            Sign Out
          </button>{" "}
          and log back in{" "}
        </h4>
      </div>
    </div>
  );
};

export default DisplayError;
