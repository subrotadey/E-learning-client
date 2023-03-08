import { GoogleAuthProvider } from "firebase/auth";
import React from "react";
import { useState } from "react";
import { useContext } from "react";
// import entry from "./../../assets/images/entry.png";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Login = () => {
  const { register,formState: { errors }, handleSubmit } = useForm();
  const { signIn, providerLogin } = useContext(AuthContext);
  const [loginError, setLoginError] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const from = location.state?.from?.pathname || '/'

  const handleLogin = data => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
    .then(result => {
      const user = result.user;
      console.log(user) 
      navigate(from, {replace: true});
    })
    .catch(error => {
      console.log(error.message)
      setLoginError(error.message)
    });
  }

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
    .then(result => {
      const user = result.user;
      console.log(user);
    })
    .catch(error => console.error(error));
  }


  return (
    <div className="flex h-screen items-center justify-center border-accent">
      <div className="w-96 p-7 border-accent">
        <form onSubmit={handleSubmit(handleLogin)}>
          <h2 className="text-xl text-center">Login</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label"><span className="label-text">Email</span></label>
            <input 
            {...register("email", {
              required: "Email Address is required"
            })} 
            aria-invalid={errors.email ? "true" : "false"}
            type="email" 
            className="input-bordered input w-full max-w-xs"/>
            {errors.email && <p className="text-red-600">{errors.email?.message}</p>}
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label"> <span className="label-text">Password</span></label>
            <input 
            {...register("password", {
              required: "Password is required",
              minLength: {value:6, message:"Password at least 6 characters"}
            })} 
            type="password" 
            className="input-bordered input w-full max-w-xs"/>
            {errors.password && <p className="text-red-600">{errors.password?.message}</p>}
            <label className="label"><span className="label-text text-red-600"><Link>Forget Password?</Link></span></label>
          </div>
          <input type="submit" value="Login" className="btn btn-accent w-full"/>
          <div>
            {loginError && <p className="text-red-600">{loginError}</p>}
          </div>
        </form>
        <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
        <div className="divider">OR</div>
        <button onClick={handleGoogleSignIn} className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
      </div>
    </div>
  );
};

export default Login;
