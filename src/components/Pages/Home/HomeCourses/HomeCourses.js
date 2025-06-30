import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HomeCourse from "./HomeCourse";

const HomeCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    const url = `https://onlineeulogy.onrender.com/courses`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setCourses(data.courses);
      });
  }, []);

  return (
    <div className="mb-4 px-12">
      <div className="m-6 border-l-8 border-l-indigo-600 p-6  text-white">
        <h1 className="text-6xl font-bold uppercase italic">
          <span className="text-2xl font-bold text-indigo-500">
            popular <br />
          </span>
          courses
        </h1>
        <h5 className="font-sans text-lg">
          Phasellus non dolor nibh. Nullam elementum tellus pretium feugiat.
          Cras dictum tellus dui, vitae sollicitudin ipsum tincidunt in. Sed
          tincidunt tristique enim sed sollcitudin. Cras dictum tellus dui,
          vitae sollicitudin ipsum tincidunt adipiscing atgfnte tibulum sapien
          sed mattis.Cras dictum tellus dui. Sed mollis vestibulum sapien rthsed
          mattis.
        </h5>
      </div>
      <div className="pt-12">
        <div className="grid place-content-around gap-4 lg:grid-cols-3">
          {courses.slice(0, 3).map((course) => (
            <HomeCourse key={course._id} course={course}></HomeCourse>
          ))}
        </div>
      </div>
      <div className="my-4 text-center">
        <Link to="/courses">
          <button className="btn-primary btn">view more</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeCourses;
