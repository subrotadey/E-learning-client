import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import logo from "./../../../assets/images/logo.png";
import { AiOutlineLogin } from "react-icons/ai";
import { BiLogOutCircle } from "react-icons/bi";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
    .then(()=> {})
    .catch(err => console.log(err));
  }
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
        <Link to="/books">Books</Link>
      </li>
    </>
  );
  return (
    <div className="text-gray navbar fixed z-50 w-full bg-base-100 bg-opacity-20  text-white backdrop-blur-lg backdrop-filter">
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
            className="dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 text-lg text-white shadow	"
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
        <ul className="text-light menu menu-horizontal px-1 text-lg">
          {menuItems}
        </ul>
      </div>
      <div className="dropdown dropdown-end ml-auto">
        <label tabIndex="0" className="btn-ghost btn-circle avatar btn">
          <div className="">
            {user?.uid ? (
            <BiLogOutCircle className="w-full text-4xl"></BiLogOutCircle>
            
          ) : (
            <AiOutlineLogin className="w-full text-4xl"></AiOutlineLogin>
            // <p>LogOut</p>
          )}
          </div>
        </label>
        <ul
          tab="0"
          className="text-light dropdown-content menu rounded-box menu-compact mt-3 w-52 bg-base-100 p-2 shadow"
        >
          {/* <li>
            <img
              src="https://placeimg.com/80/80/people"
              alt=""
              className="rounded-full"
            />
          </li> */}
          
          {user?.uid ? (
            <>
              <li><Link>Profile<span className="badge">New</span></Link></li>
              <li><Link>My Classes</Link></li>
              <li><Link>Settings</Link></li>
              <li><Link  to="/dashboard">Dashboard</Link></li>
              <li><button onClick={handleLogOut} className="mx-1">Sign Out</button></li>
            </>
            
          ) : (
            <li><Link className="mx-1" to="/login">Login</Link></li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
