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
      .then((result) => {
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

  const fillDemoUser = () => {
    setValue("email", "user@example.com");
    setValue("password", "User@123");
  };

  return (
    <>
      <div className="flex h-screen items-center justify-evenly text-center font-mono ">
        <div>
          <img src={login} alt="Login Illustration" />
        </div>
        <div className="flex items-center justify-center border-accent rounded-lg bg-zinc-800 w-3/12">
          <div className="w-96 border-accent p-7">
            <form onSubmit={handleSubmit(handleLogin)}>
              <h2 className="text-center text-xl">Login</h2>
              <div className="flex justify-between mb-4">
                <button
                  type="button"
                  onClick={fillDemoAdmin}
                  className="btn btn-sm btn-secondary"
                >
                  Demo Admin
                </button>
                <button
                  type="button"
                  onClick={fillDemoUser}
                  className="btn btn-sm btn-primary"
                >
                  Demo User
                </button>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  aria-invalid={errors.email ? "true" : "false"}
                  type="email"
                  className="input-bordered input w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  {...register("password", {
                    required: "Password is required",
                    minLength: {
                      value: 6,
                      message: "Password at least 6 characters",
                    },
                  })}
                  type={showPassword ? "text" : "password"}
                  className="input-bordered input w-full max-w-xs"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
                <div className="flex items-center gap-2 mt-2">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-accent"
                    onClick={handleTogglePassword}
                  />
                  <span>Show Password</span>
                </div>
                <label className="label">
                  <span className="label-text text-red-600">
                    <Link to="/forgetpassword">Forget Password?</Link>
                  </span>
                </label>
              </div>

              <input
                type="submit"
                value="Login"
                className="btn-accent btn w-full"
              />
              <div>{loginError && <p className="text-red-600">{loginError}</p>}</div>
            </form>
            <p>
              New to Edulogy{" "}
              <Link className="text-secondary" to="/signup">
                Create new Account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn-outline btn w-full"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
