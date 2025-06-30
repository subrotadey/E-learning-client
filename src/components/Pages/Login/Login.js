import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useToken from "../../Hooks/useToken";
import login from "../../assets/images/sign-in.gif";

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
    <div className="min-h-screen flex flex-col md:flex-row items-center justify-center gap-10 px-4 py-10 bg-zinc-800 ">
      {/* Image */}
      <div className="w-full max-w-md md:w-5/12 flex justify-center">
        <img src={login} alt="Login Illustration" className="w-full h-auto object-contain" />
      </div>

      {/* Login Form */}
      <div className="w-full max-w-md md:w-5/12 bg-zinc-800 p-8 rounded-lg shadow-lg text-white">
        <form onSubmit={handleSubmit(handleLogin)} className="text-center">
          <h2 className="text-2xl font-semibold mb-4">Login</h2>
          <p className="mb-4 text-sm text-gray-300">Click the button for role wise login</p>

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
              className="input input-bordered w-full max-w-xs"
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
              className="input input-bordered w-full max-w-xs"
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

        <p className="text-white mt-6">
          New to Edulogy?{" "}
          <Link to="/signup" className="text-secondary underline hover:text-white">
            Create new Account
          </Link>
        </p>

        <div className="divider text-white">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="btn btn-outline btn-white w-full max-w-xs mx-auto"
        >
          CONTINUE WITH GOOGLE
        </button>
      </div>
    </div>
  );
};

export default Login;
