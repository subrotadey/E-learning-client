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

          fetch("https://onlineeulogy.onrender.com/teachers", {
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
    <div className="px-4 md:px-10 py-8 max-w-7xl mx-auto">
      <h2 className="text-3xl font-semibold mb-8 text-center">👩‍🏫 Add a New Teacher</h2>
      <form
        onSubmit={handleSubmit(handleAddTeacher)}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {/* First Name */}
        <div>
          <label className="label-text font-medium">First Name</label>
          <input
            type="text"
            {...register("first_name", {
              required: "This Field is Required",
            })}
            className="input input-bordered w-full"
            placeholder="e.g. John"
          />
          {errors.first_name && (
            <p className="text-red-500 text-sm">{errors.first_name.message}</p>
          )}
        </div>

        {/* Last Name */}
        <div>
          <label className="label-text font-medium">Last Name</label>
          <input
            type="text"
            {...register("last_name", {
              required: "This Field is Required",
            })}
            className="input input-bordered w-full"
            placeholder="e.g. Doe"
          />
          {errors.last_name && (
            <p className="text-red-500 text-sm">{errors.last_name.message}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="label-text font-medium">Email</label>
          <input
            type="email"
            {...register("email", {
              required: "Email is required",
            })}
            className="input input-bordered w-full"
            placeholder="e.g. john@example.com"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Designation */}
        <div>
          <label className="label-text font-medium">Designation</label>
          <input
            type="text"
            {...register("designation", {
              required: "This Field is Required",
            })}
            className="input input-bordered w-full"
            placeholder="e.g. Senior Instructor"
          />
          {errors.designation && (
            <p className="text-red-500 text-sm">{errors.designation.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="">
          <label className="label-text font-medium">Description</label>
          <textarea
            {...register("description", {
              required: "This Field is Required",
            })}
            className="textarea textarea-bordered w-full"
            placeholder="Short bio or description"
            rows={4}
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>

        {/* Image Upload */}
        <div className="">
          <label className="label-text font-medium">Photo</label>
          <input
            type="file"
            {...register("image", {
              required: "Photo is Required",
            })}
            className="file-input file-input-bordered w-full"
          />
          {errors.image && (
            <p className="text-red-500 text-sm">{errors.image.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="md:col-span-2">
          <input
            type="submit"
            value="Add Teacher"
            className="btn btn-accent w-full"
          />
        </div>
      </form>
    </div>
  );
};

export default AddTeacher;
