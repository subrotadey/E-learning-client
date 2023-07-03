import React from "react";
import bgBook from "../../assets/images/book3.jpg";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../Shared/Loading/Loading";
import Book from "./Book";
import { useLoaderData } from "react-router-dom";
import { BsSearch } from "react-icons/bs";

const Books = () => {
  const books = useLoaderData();
  const [query, setQuery] = useState("");

  // console.log(books);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <>
      <div
        className="h-full w-full overflow-x-hidden bg-cover bg-no-repeat"
        style={{
          background: `url(${bgBook})`,
          backgroundSize: "cover",
        }}
      >
        <div className="hero min-h-screen px-12">
          <div className="hero-content flex-col lg:flex-row-reverse">
            {/* <img src={banner} className="lg:max-w-sm md:max-w-sm sm:w-100 rounded-lg shadow-2xl" alt="" /> */}
            <div className="dark:text-black">
              <h1 className="text-5xl font-bold">
                Books were safer than other people anyway
              </h1>
              <p className="py-6">
                Neil Gaiman, The Ocean at the End of the Lane
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
          {loading ? (
            <Loading></Loading>
          ) : (
            <div className="pt-12">
              <div className="lg:mx-12 mx-3 flex justify-center  mt-4">
            {/* <div className="lg:text-3xl text-2xl italic ">
              <p>Courses</p>
            </div> */}
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-200">
              <BsSearch className="absolute w-5 h-5 ml-3 pointer-events-none"></BsSearch>
              <input
                type="search"
                name="search"
                placeholder="Type here"
                className="input w-100  border-none font-semibold  ring-2 ring-gray-300 focus:ring-2 focus:ring-gray-500 pl-10 pr-3"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
              <h1 className="uppercase text-center text-5xl my-4">Find YOur favorite book</h1>
              <div className="mx-12 grid grid-cols-1 gap-4 lg:grid-cols-4 my-12">
                {books
                .filter((book) => book.title.toLowerCase().includes(query))
                .map((book) => (
                  <Book key={book._id} book={book}></Book>
                ))}
              </div>
            </div>
          )}
        </div>
    </>
  );
};

export default Books;
