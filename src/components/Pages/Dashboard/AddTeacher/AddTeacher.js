import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const AddTeacher = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const imageHostKey = process.env.REACT_APP_imgbb_key;
  const navigate = useNavigate();

  const handleAddTeacher = (data) => {
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
          const teacher = {
            first_name: data.first_name,
            last_name: data.last_name,
            img_link: imgData.data.url,
            email: data.email,
            designation: data.designation,
            description: data.description,
          };

          // save teacher information to the server
          fetch("https://learning-server-site-three.vercel.app/teachers", {
            method: "POST",
            headers: {
              "content-type": "application/json",
              authorization: `bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(teacher),
          })
            .then((res) => res.json())
            .then((result) => {
              if (result.acknowledged) {
                toast.success(`${data.first_name} is successfully added`);
                navigate("/dashboard/manageteachers");
              } else {
                toast.error(result.message);
              }
            });
        }
      });
  };

  return (
    <div>
      <h2 className="text-3xl">Add A Teacher</h2>
      <div className="w-96 p-7 ">
        <form onSubmit={handleSubmit(handleAddTeacher)}>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Teacher First Name</span>
            </label>
            <input
              type="text"
              {...register("first_name", {
                required: "This Field is Required",
              })}
              className="input-bordered input w-full max-w-xs"
            />
            {errors.first_name && (
              <p className="text-red-500">{errors.first_name.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Teacher Last Name</span>
            </label>
            <input
              type="text"
              {...register("last_name", {
                required: "This Field is Required",
              })}
              className="input-bordered input w-full max-w-xs"
            />
            {errors.last_name && (
              <p className="text-red-500">{errors.last_name.message}</p>
            )}
          </div>
          {/* <div className="form-control w-full max-w-xs">
                        <label className="label"> <span className="label-text">Provide a Img Link</span></label>
                        <input type="text" {...register("img_link", {
                            required: "This Field is Required"
                        })} className="input input-bordered w-full max-w-xs" />
                        {errors.img_link && <p className='text-red-500'>{errors.img_link.message}</p>}
                    </div> */}
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              {...register("email", {
                required: true,
              })}
              className="input-bordered input w-full max-w-xs"
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Designation</span>
            </label>
            <input
              type="text"
              {...register("designation", {
                required: "This Field is Required",
              })}
              className="input-bordered input w-full max-w-xs"
            />
            {errors.designation && (
              <p className="text-red-500">{errors.designation.message}</p>
            )}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              {" "}
              <span className="label-text">Description</span>
            </label>
            <input
              type="text"
              {...register("description", {
                required: "This Field is Required",
              })}
              className="input-bordered input w-full max-w-xs"
            />
            {errors.description && (
              <p className="text-red-500">{errors.description.message}</p>
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
              className="input-bordered input w-full max-w-xs"
            />
            {errors.image && (
              <p className="text-red-500">{errors.image.message}</p>
            )}
          </div>
          <input
            className="btn-accent btn mt-4 w-full"
            value="Add Teacher"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTeacher;
