import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex h-screen items-center justify-center text-center font-mono text-5xl">
      <div>
        <h1 className="text-9xl text-info">404</h1>
        <h2>Not Found</h2>
        <Link to="/" className="btn-accent btn">
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
