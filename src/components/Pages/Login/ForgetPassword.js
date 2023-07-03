import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../contexts/AuthProvider";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import forgetPassword from "../../assets/images/email-verification.gif";

const ForgetPassword = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { resetPassword } = useContext(AuthContext);
  const [userEmail, setUserEmail] = useState("");

  const handleLogin = (data, e) => {
    e.preventDefault();
  };

  const handleEmailBlur = (event) => {
    const email = event.target.value;
    setUserEmail(email);
    // console.log(email);
  };

  const handleForgotPassword = () => {
    resetPassword(userEmail)
      .then(() => {
        toast("Password Reset Email Sent Successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-evenly text-center font-mono ">
        <div>
          <img src={forgetPassword} alt="" />
        </div>
        <div className="flex w-3/12 items-center justify-center rounded-lg border-accent bg-zinc-800">
          <div className="w-96 border-accent p-7">
            <form onSubmit={handleSubmit(handleLogin)}>
              <h2 className="text-center text-xl">Reset Password</h2>
              <div className="form-control my-8 w-full">
                <label className="label">
                  <span className="label-text">Enter Your Email Email</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                  type="email"
                  onBlur={handleEmailBlur}
                  className="input-bordered input w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <input
                type="submit"
                value="Send Email"
                onClick={handleForgotPassword}
                className="btn-accent btn w-full"
              />
            </form>
            <p className="my-2">
              New to Edulogy?{" "}
              <Link className="text-secondary" to="/signup">
                Create new Account
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgetPassword;
