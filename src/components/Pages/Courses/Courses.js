// import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
// import Loading from "../Shared/Loading/Loading";
// import Course from "./Course";
// import { BsSearch } from "react-icons/bs";

// const Courses = () => {
//   const {courses} = useLoaderData();
//   const [query, setQuery] = useState("");

//   // console.log(courses.filter(course => course.heading.toLowerCase().includes(query)));
//   const [loading, setLoading] = useState(false);
//   useEffect(() => {
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//     }, 300);
//   }, []);
//   return (
//     <div className="flex items-center justify-center pt-20">
//       {loading ? (
//         <Loading></Loading>
//       ) : (
//         <div className="my-12">
//           <div className="lg:text-3xl text-2xl italic text-center uppercase">
//               <p>Our Best Courses With Best Mentor</p>
//             </div>
//           <div className="lg:mx-12 mx-3 flex justify-center  mt-4">
//             {/* <div className="lg:text-3xl text-2xl italic ">
//               <p>Courses</p>
//             </div> */}
//             <div className="relative flex items-center text-gray-400 focus-within:text-gray-200">
//               <BsSearch className="absolute w-5 h-5 ml-3 pointer-events-none"></BsSearch>
//               <input
//                 type="search"
//                 name="search"
//                 placeholder="Type here"
//                 className="input w-full max-w-xs border-none font-semibold  ring-2 ring-gray-300 focus:ring-2 focus:ring-gray-500 pl-10 pr-3"
//                 onChange={(e) => setQuery(e.target.value)}
//               />
//             </div>
//           </div>
//           <div className="divider"></div>

//           <div className="mx-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
//             {courses
//               .filter((course) => course.heading.toLowerCase().includes(query))
//               .map((course) => (
//                 <Course key={course._id} course={course}></Course>
//               ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Courses;

import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import Course from "./Course";
import { BsSearch } from "react-icons/bs";
// import { useLoaderData } from "react-router-dom";

const Courses = () => {
  // const { courses, count } = useLoaderData();
  const [query, setQuery] = useState("");

  const [courses, setCourses] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(0);
  const [size, setSize] = useState(10);

  useEffect(() => {
    const url = `https://e-learning-server-hazel.vercel.app/courses?page=${page}&size=${size}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
        setCourses(data.courses);
      });
  }, [page, size]);

  // console.log(courses);

  const pages = Math.ceil(count / size);

  // console.log(courses.filter(course => course.heading.toLowerCase().includes(query)));
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <div className="flex items-center justify-center pt-20">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="my-12">
          <div className="text-center text-2xl uppercase italic lg:text-3xl">
            <p>Our Most valuable Course</p>
          </div>
          <div className="mx-3 mt-4 flex justify-center  lg:mx-12">
            {/* <div className="lg:text-3xl text-2xl italic ">
              <p>Courses</p>
            </div> */}
            <div className="relative flex items-center text-gray-400 focus-within:text-gray-200">
              <BsSearch className="pointer-events-none absolute ml-3 h-5 w-5"></BsSearch>
              <input
                type="search"
                name="search"
                placeholder="Type here"
                className="input  max-w-xs border-none pl-10  pr-3 font-semibold ring-2 ring-gray-300 focus:ring-2 focus:ring-gray-500"
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="divider"></div>

          <div className="mx-12 grid grid-cols-1 gap-4 lg:grid-cols-2">
            {courses
              .filter((course) => course.heading.toLowerCase().includes(query))
              .map((course) => (
                <Course key={course._id} course={course}></Course>
              ))}
          </div>
          <div className="pagination flex text-center">
            <p>
              currently selected page {page + 1} and size {size}
            </p>
            {[...Array(pages).keys()].map((number) => (
              <div className="">
                <div className=" btn-lg btn mx-3">
                  <button
                    className={page === number ? "text-primary" : undefined}
                    key={number}
                    onClick={() => setPage(number)}
                  >
                    {number + 1}
                  </button>
                </div>
              </div>
            ))}
          </div>
          <select onChange={(event) => setSize(event.target.value)}>
            <option value="5">5</option>
            <option value="10" defaultValue>
              10
            </option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
      )}
    </div>
  );
};

export default Courses;
