import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useToken from "../../Hooks/useToken";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
  } = useForm();

  const { signIn, providerLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const [loginUserEmail, setLoginUserEmail] = useState("");
  const [token] = useToken(loginUserEmail);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = (data) => {
    setLoginError("");
    signIn(data.email, data.password)
      .then(() => {
        setLoginUserEmail(data.email);
      })
      .catch((error) => {
        setLoginError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };

  const fillDemoAdmin = () => {
    setValue("email", "subrotadey540@gmail.com");
    setValue("password", "Admin@123");
  };

  const fillDemoInstructor = () => {
    setValue("email", "instructor@example.com");
    setValue("password", "Instructor@123");
  };

  const fillDemoUser = () => {
    setValue("email", "user@example.com");
    setValue("password", "User@123");
  };

  return (
    <div className="flex items-center justify-center mx-auto pt-20 my-6 w-11/12">
      {/* Login Form */}
      <div className="w-full max-w-md md:w-5/12  p-8 rounded-lg shadow-lg ">
        <form onSubmit={handleSubmit(handleLogin)} className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <p className="mb-4 text-sm ">Click the button for role wise login</p>

          <div className="flex justify-center gap-3 mb-6 flex-wrap">
            <button type="button" onClick={fillDemoAdmin} className="btn btn-sm btn-secondary">
              Admin
            </button>
            <button type="button" onClick={fillDemoInstructor} className="btn btn-sm btn-accent">
              Instructor
            </button>
            <button type="button" onClick={fillDemoUser} className="btn btn-sm btn-primary">
              User
            </button>
          </div>

          {/* Email Input */}
          <div className="form-control w-full max-w-xs mx-auto mb-4 text-left">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              {...register("email", {
                required: "Email Address is required",
              })}
              aria-invalid={errors.email ? "true" : "false"}
              type="email"
              className="input input-bordered w-full max-w-xs bg-white input-accent"
              placeholder="Enter your email"
            />
            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>

          {/* Password Input */}
          <div className="form-control w-full max-w-xs mx-auto mb-2 text-left">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Password at least 6 characters" },
              })}
              type={showPassword ? "text" : "password"}
              className="input input-bordered w-full max-w-xs bg-white input-accent "
              placeholder="Enter your password"
            />
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}

            <div className="flex items-center gap-2 mt-2">
              <input
                type="checkbox"
                className="checkbox checkbox-accent"
                onClick={handleTogglePassword}
                id="show-password"
              />
              <label
                htmlFor="show-password"
                className="text-white select-none cursor-pointer"
              >
                Show Password
              </label>
            </div>

            <label className="label">
              <Link to="/forgetpassword" className="label-text text-red-600">
                Forget Password?
              </Link>
            </label>
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Login"
            className="btn btn-accent w-full max-w-xs mx-auto mt-4"
          />
          {loginError && (
            <p className="text-red-600 mt-3 max-w-xs mx-auto text-left">{loginError}</p>
          )}
        </form>

        <p className="text-white mt-6 text-center">
          New to Edulogy?{" "}
          <Link to="/signup" className="text-secondary underline hover:text-black">
            Create new Account
          </Link>
        </p>

        <div className="divider text-white mx-auto">OR</div>
        <div className="flex justify-center">
          <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-white w-full max-w-xs"
        >
          CONTINUE WITH GOOGLE
        </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
