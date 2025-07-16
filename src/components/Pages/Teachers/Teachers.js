import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading/Loading";
import Teacher from "./Teacher";

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const url = `https://e-learning-server-hazel.vercel.app/teachers`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setTeachers(data);
      });
  }, []);

  // Show loading initially
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="flex items-center justify-center pt-20 w-11/12 mx-auto">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="pt-20 my-12">
          <p className="text-center text-2xl uppercase mb-6 textarea-ghost">Our Valuable Teacher</p>
          <div className="mx-12 grid grid-cols-1 gap-4 lg:grid-cols-4">
            {teachers?.map((teacher) => (
              <Teacher key={teacher._id} teacher={teacher}></Teacher>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Teachers;