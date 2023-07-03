import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import useToken from "../../Hooks/useToken";
import signup from "../../assets/images/sign-up.gif";


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

  // show password in field
  const [showPassword, setShowPassword] = useState(false);
  const [setPassword] = useState("");
  

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSignUp = (data, e) => {
    // e.preventDefault();
    console.log(data);
    setSignUpError("");
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast("User Created Successfully");
        verifyEmail(user).then(() => {});
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
        console.log(error);
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
    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        setUserCreatedEmail(email);
        // console.log( 'save user',data);
      });
  };

  return (
    <div className="flex h-screen items-center justify-center text-center font-mono ">
      <div>
        <img src={signup} alt="" />
      </div>
      <div className="flex items-center justify-center rounded-lg bg-zinc-800 w-3/12">
        <div className="w-96 p-7">
          <h2 className="text-center text-xl">Sign Up</h2>
          <form onSubmit={handleSubmit(handleSignUp)}>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your name"
                {...register("name", {
                  required: "Name is Required",
                })}
                className="input-bordered input w-full max-w-xs"
              />
              {errors.name && (
                <p className="text-red-500">{errors.name.message}</p>
              )}
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                {" "}
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
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
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                onChange={handleChange}
                placeholder="Password"
                className="input-bordered input w-full max-w-xs"
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
              />
              <span
                className="flex w-0 bg-lime-800"
                onClick={handleTogglePassword}
              >
                <input
                  type="checkbox"
                  className="checkbox-accent checkbox my-2"
                />
              </span>

              {errors.password && (
                <p className="text-red-500">{errors.password.message}</p>
              )}
            </div>
            <input
              className="btn-accent btn mt-4 w-full"
              value="Sign Up"
              type="submit"
            />
            {signUpError && <p className="text-red-600">{signUpError}</p>}
          </form>
          <p>
            Already have an account{" "}
            <Link className="text-secondary" to="/login">
              Please Login
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
  );
};

export default SignUp;
