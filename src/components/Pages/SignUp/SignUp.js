import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser, providerLogin, verifyEmail } =
    useContext(AuthContext);
  const [signUpError, setSignUpError] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const location = useLocation();
  const [userCreatedEmail, setUserCreatedEmail] = useState("");
  const [token] = useToken(userCreatedEmail);
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  if (token) {
    navigate(from, { replace: true });
  }

  const [showPassword, setShowPassword] = useState(false);
  const [setPassword] = useState("");

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (data) => {
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        toast("User Created Successfully");
        verifyEmail(user);
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            saveUser(data.name, data.email);
          })
          .catch((err) => console.log(err));
      })
      .catch((error) => {
        setSignUpError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const saveUser = (name, email) => {
    const user = { name, email };
    fetch("https://e-learning-server-hazel.vercel.app/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then(() => {
        setUserCreatedEmail(email);
      });
  };

  return (
    <div className="mx-auto pt-20 flex items-center justify-center w-11/12 my-6">
      {/* Sign Up Form */}
      <div className="w-full max-w-md md:w-5/12 p-8 rounded-lg shadow-lg ">
        <h2 className="text-center text-2xl font-semibold mb-4">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          {/* Name */}
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Your name"
              {...register("name", { required: "Name is Required" })}
              className="input input-bordered w-full input-accent bg-white"
            />
            {errors.name && <p className="text-red-500">{errors.name.message}</p>}
          </div>

          {/* Email */}
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", { required: true })}
              className="input input-bordered w-full input-accent bg-white"
            />
            {errors.email && <p className="text-red-500">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="form-control w-full mb-4">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              onChange={handleChange}
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be 6 characters long",
                },
                pattern: {
                  value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])/,
                  message:
                    "Password must have uppercase, number and special characters",
                },
              })}
              className="input input-bordered w-full input-accent bg-white"
            />
            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                onClick={handleTogglePassword}
              />
              <span>Show Password</span>
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Submit */}
          <input
            className="btn btn-accent w-full mt-4"
            value="Sign Up"
            type="submit"
          />
          {signUpError && <p className="text-red-600 mt-2">{signUpError}</p>}
        </form>

        <p className="mt-4">
          Already have an account?{" "}
          <Link className="text-secondary underline hover:text-black" to="/login">
            Please Login
          </Link>
        </p>

        <div className="divider text-white">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline w-full"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default SignUp;
