import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Loading from "../Shared/Loading/Loading";
import Teacher from "./Teacher";

const Teachers = () => {
  const teachers = useLoaderData();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 300);
  }, []);
  return (
    <div className="flex items-center justify-center">
      {loading ? (
        <Loading></Loading>
      ) : (
        <div className="pt-12">
          <h1>This is courses</h1>
          <div className="mx-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
            {teachers.map((teacher) => (
              <Teacher key={teacher._id} teacher={teacher}></Teacher>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Teachers;
