import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../assets/images/logo.png";

const Navbar = () => {
  const menuItems = (
    <>
      <li>
        <Link className="mx-1" to="/">
          Home
        </Link>
      </li>
      <li>
        <Link className="mx-1" to="/courses">
          Courses
        </Link>
      </li>
      <li>
        <Link className="mx-1" to="/teachers">
          Teachers
        </Link>
      </li>
      <li>
        <Link className="mx-1" to="/blogs">
          Blogs
        </Link>
      </li>
      <li>
        <Link className="mx-1" to="/about">
          About
        </Link>
      </li>
      <li>
        <Link className="mx-1" to="/contact">
          Contact
        </Link>
      </li>
      <li>
        <Link className="mx-1" to="/login">
          Login
        </Link>
      </li>
    </>
  );
  return (
    <div className="text-gray navbar fixed z-50 w-full bg-base-100 bg-opacity-20  backdrop-blur-lg backdrop-filter ">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn-ghost btn lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-lg shadow "
          >
            {menuItems}
          </ul>
        </div>
        {/* <Link className="btn btn-ghost normal-case"><img className="lg:w-28 w-28" src={logo} alt="" /></Link> */}
        <Link to="/" className="">
          <img className="w-36 lg:w-36" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center ml-auto hidden lg:flex ">
        <ul className="menu menu-horizontal px-1 text-lg text-white">
          {menuItems}
        </ul>
      </div>
      <div className="dropdown dropdown-end ml-auto">
        <label tabIndex="0" className="btn-ghost btn-circle avatar btn">
          <div className="w-10 rounded-full">
            <img src="https://placeimg.com/80/80/people" alt="" />
          </div>
        </label>
        <ul
          tab="0"
          className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-white shadow"
        >
          <li>
            <Link>
              Profile<span className="badge">New</span>
            </Link>
          </li>
          <li>
            <Link to="/books">Free Books</Link>
          </li>
          <li>
            <Link>My Classes</Link>
          </li>
          <li>
            <Link>Dashboard</Link>
          </li>
          <li>
            <Link>Settings</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
