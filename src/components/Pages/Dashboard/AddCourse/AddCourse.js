import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const handleAddCourse = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        if (imgData.success) {
          const course = {
            heading: data.heading,
            img: imgData.data.url,
            price: data.price,
            weeks: data.weeks,
            level: data.level,
            lesson: data.lesson,
            quiz: data.quiz,
            student: data.student,
          };

          // save teacher information to the server
          fetch("https://e-learning-server-hazel.vercel.app/courses", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(course),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                console.log(result);
                toast.success(`${data.heading} is successfully added`);
                navigate("/dashboard/managecourses");
              } else {
                toast.error(result.message);
              }
            });
        }
      });
  };
  return (
    <div>
      <h2 className="text-3xl">Add A Course</h2>
      <div className="w-96 p-7 ">
        <form onSubmit={handleSubmit(handleAddCourse)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
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
              {" "}
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
              {" "}
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
              {" "}
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
              {" "}
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
              {" "}
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
              {" "}
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
            value="Add Course"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
