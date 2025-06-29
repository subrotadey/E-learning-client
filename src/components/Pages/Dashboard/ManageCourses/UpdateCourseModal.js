import React from "react";
// import { useEffect } from "react";
// import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";

const UpdateCourseModal = ({ updateCourse, setUpdateCourse }) => {
  const { _id, heading, img } = updateCourse;

  console.log(updateCourse);

  // const { id } = useParams();

  // console.log(_id);
  // const [course, setCourse] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  // useEffect(() => {
  //   const url = `http://localhost:5000/courses/${id}`;
  //   fetch(url)
  //     .then((res) => res.json())
  //     .then((data) => setUpdateCourse(data));
  // }, [id]);

  const handleUpdateCourse = (data, e) => {
    e.preventDefault();
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const imgURL = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;

    console.log(imgURL);
    fetch(imgURL, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const updateCourseInfo = {
            heading: data.heading,
            img: imgData.data.url,
            price: data.price,
            weeks: data.weeks,
            level: data.level,
            lesson: data.lesson,
            quiz: data.quiz,
            student: data.student,
          };

          console.log(updateCourseInfo);

          // updated teacher information to the server
          const url = `http://localhost:5000/courses/${_id}`;
          fetch(url, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(updateCourseInfo),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if (data.acknowledged) {
                // toast.success(`${data.first_name} is successfully updated`);
                toast.success(`Successfully Updated Course Information`);
                e.target.reset();
                navigate("/dashboard/managecourses");
              } else {
                toast.error(data.message);
              }
            });
        }
      });
  };

  return (
    <div>
      <input
        type="checkbox"
        id="update-course-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom overflow-x-hidden text-center sm:modal-middle">
        <div className="modal-box">
          <h3 className="text-lg font-bold">{heading}</h3>
          <img className="mx-auto  w-40" src={img} alt="" />
          <div>
            <div className="mx-auto w-96 p-7 ">
              <form onSubmit={handleSubmit(handleUpdateCourse)}>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Course Name or Heading</span>
                  </label>
                  <input
                    type="text"
                    {...register("heading", {
                      required: "This Field is Required",
                    })}
                    className="input-bordered input w-full max-w-xs"
                  />
                  {errors.heading && (
                    <p className="text-red-500">{errors.heading.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Price</span>
                  </label>
                  <input
                    type="number"
                    {...register("price", {
                      required: "This Field is Required",
                    })}
                    className="input-bordered input w-full max-w-xs"
                  />
                  {errors.price && (
                    <p className="text-red-500">{errors.price.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Weeks</span>
                  </label>
                  <input
                    type="number"
                    {...register("weeks", {
                      required: "This Field is Required",
                    })}
                    className="input-bordered input w-full max-w-xs"
                  />
                  {errors.weeks && (
                    <p className="text-red-500">{errors.weeks.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Level</span>
                  </label>
                  <input
                    type="text"
                    {...register("level", {
                      required: "This Field is Required",
                    })}
                    className="input-bordered input w-full max-w-xs"
                  />
                  {errors.level && (
                    <p className="text-red-500">{errors.level.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Lesson</span>
                  </label>
                  <input
                    type="number"
                    {...register("lesson", {
                      required: "This Field is Required",
                    })}
                    className="input-bordered input w-full max-w-xs"
                  />
                  {errors.lesson && (
                    <p className="text-red-500">{errors.lesson.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Quiz Number</span>
                  </label>
                  <input
                    type="number"
                    {...register("quiz", {
                      required: "This Field is Required",
                    })}
                    className="input-bordered input w-full max-w-xs"
                  />
                  {errors.quiz && (
                    <p className="text-red-500">{errors.quiz.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    <span className="label-text">Total Student</span>
                  </label>
                  <input
                    type="number"
                    {...register("student", {
                      required: "This Field is Required",
                    })}
                    className="input-bordered input w-full max-w-xs"
                  />
                  {errors.student && (
                    <p className="text-red-500">{errors.student.message}</p>
                  )}
                </div>
                <div className="form-control w-full max-w-xs">
                  <label className="label">
                    {" "}
                    <span className="label-text">Photo</span>
                  </label>
                  <input
                    type="file"
                    {...register("image", {
                      required: "Photo is Required",
                    })}
                    className="file-input-bordered file-input-accent file-input w-full max-w-xs"
                  />
                  {/* <input
              type="file"
              {...register("image", {
                required: "Photo is Required",
              })}
              className="input-bordered input w-full max-w-xs"
            /> */}
                  {errors.image && (
                    <p className="text-red-500">{errors.image.message}</p>
                  )}
                </div>
                <input
                  className="btn-accent btn mt-4 w-full"
                  value="Update Course"
                  type="submit"
                />
                <div className="modal-action">
                  <label
                    htmlFor="update-course-modal"
                    className="btn-warning btn  w-full"
                  >
                    Cancel
                  </label>
                </div>
              </form>
            </div>
          </div>
          <p className="py-4">
            You are updating <span className="text-green-500">"{heading}"</span>{" "}
            course details
          </p>
        </div>
      </div>
    </div>
  );
};

export default UpdateCourseModal;
