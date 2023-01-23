import React from "react";
import { Link } from "react-router-dom";
import logo from './../../../assets/images/logo.png'

const Navbar = () => {
    const menuItems = (
        <>
          <li><Link className="mx-1" to="/">Home</Link></li>
          <li><Link className="mx-1" to="/courses">Courses</Link></li>
          <li><Link className="mx-1" to="/teachers">Teachers</Link></li>
          <li><Link className="mx-1" to="/blogs">Blogs</Link></li>
          <li><Link className="mx-1" to="/about">About</Link></li>
          <li><Link className="mx-1" to="/contact">Contact</Link></li>
          <li><Link className="mx-1" to="/login">Login</Link></li>
        </>
      );
    return (
        <div className="navbar bg-base-100 fixed z-50 w-full text-gray bg-opacity-20  backdrop-filter backdrop-blur-lg ">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex="0" className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16"/>
                </svg>
              </label>
              <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-lg ">
                {menuItems}
              </ul>
            </div>
            {/* <Link className="btn btn-ghost normal-case"><img className="lg:w-28 w-28" src={logo} alt="" /></Link> */}
            <Link to="/" className="" ><img className="lg:w-36 w-36" src={logo} alt="" /></Link>
          </div>
            <div className="navbar-center hidden lg:flex ml-auto ">
              <ul className="menu menu-horizontal px-1 text-lg text-white">
              {menuItems}
              </ul>
            </div>
            <div className="dropdown dropdown-end ml-auto">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" alt="" />
                </div>
              </label>
              <ul tab="0" className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 text-white">
                <li><Link>Profile<span className="badge">New</span></Link></li>
                <li><Link>Free Books</Link></li>
                <li><Link>My Classes</Link></li>
                <li><Link>Dashboard</Link></li>
                <li><Link>Settings</Link></li>
                <li><Link>Logout</Link></li>
              </ul>
            </div>
        </div>
    );
};

export default Navbar;