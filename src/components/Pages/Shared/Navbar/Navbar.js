import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../contexts/AuthProvider";
import logo from "../../../assets/images/logo.png";
import avatar from "../../../assets/images/profile.svg";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    logOut().catch(err => console.log(err));
  };

  useEffect(() => {
  if (isMenuOpen) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }

  return () => {
    document.body.style.overflow = "auto";
  };
}, [isMenuOpen]);


  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Courses", path: "/courses" },
    { name: "Teachers", path: "/teachers" },
    { name: "Blogs", path: "/blogs" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Books", path: "/books" },
    { name: "Success Story", path: "/success-story" }
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 px-4 md:px-16 lg:px-24 xl:px-32 flex items-center justify-between ${
          isScrolled
            ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
            : "bg-indigo-500 text-white py-4 md:py-6"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={logo}
            alt="logo"
            className={`h-9 transition duration-300 ${isScrolled ? "invert opacity-80" : ""}`}
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-4 lg:gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={i}
              to={link.path}
              className={`group flex flex-col gap-0.5 ${
                isScrolled ? "text-gray-700" : "text-white"
              }`}
            >
              {link.name}
              <div
                className={`h-0.5 w-0 group-hover:w-full transition-all duration-300 ${
                  isScrolled ? "bg-gray-700" : "bg-white"
                }`}
              />
            </Link>
          ))}
        </div>

        {/* Right Side */}
        <div className="hidden md:flex items-center gap-4">
          {/* User Profile */}
          {user?.uid ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={user?.photoURL || avatar} alt="profile" />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="dropdown-content menu shadow  rounded-box w-52 mt-3 text-black bg-white"
              >
                <li className="text-center font-bold my-3">{user.displayName}</li>
                <div className="divider my-1"></div>
                <li>
                  <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                  <button onClick={handleLogOut}>Sign Out</button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button
                className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${
                  isScrolled ? "text-white bg-black" : "bg-white text-black"
                }`}
              >
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-3 ">
          <svg
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`h-6 w-6 cursor-pointer transition-all duration-500 ${
              isScrolled ? "text-black" : "text-white"
            }`}
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="4" y1="6" x2="20" y2="6" />
            <line x1="4" y1="12" x2="20" y2="12" />
            <line x1="4" y1="18" x2="20" y2="18" />
          </svg>
        </div>
      </nav>

      {/* Mobile Menu */}
      {/* Mobile Menu */}
<div
  className={`text-black bg-white fixed top-0 left-0 w-full h-screen text-center z-50 py-6 flex flex-col md:hidden items-start px-6 justify-start gap-6 font-medium transition-transform duration-500 ${
    isMenuOpen ? "translate-x-0" : "-translate-x-full"
  }`}
>
  <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
    <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </button>

  {/* User Info or Login */}
  {user?.uid ? (
    <div className="text-center w-full flex flex-col items-center">
      <div className="flex items-center gap-3 mt-10">
        <img src={user?.photoURL || avatar} className="w-10 h-10 rounded-full" alt="User" />
      </div>
        <span className="font-semibold">{user?.displayName}</span>
      <Link to="/dashboard" onClick={() => setIsMenuOpen(false)}>Dashboard</Link>
      <button onClick={() => { handleLogOut(); setIsMenuOpen(false); }}>Sign Out</button>
    </div>
  ) : (
    <Link to="/login" onClick={() => setIsMenuOpen(false)} className="mx-auto">
      <button className="px-6 py-2.5 rounded-full mt-10 bg-indigo-500 text-white">Login</button>
    </Link>
  )}

  {/* Nav Links */}
  <div className="mt-6 flex flex-col gap-4 w-full relative">
    {navLinks.map((link, i) => (
      <Link key={i} to={link.path} onClick={() => setIsMenuOpen(false)} className="hover:underline">
        {link.name}
      </Link>
    ))}
  </div>
</div>

    </>
  );
};

export default Navbar;
