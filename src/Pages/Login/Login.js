import React from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="w-4/5 m-auto  text-center ">
      <h1 className="text-5xl mb-10 mt-5">Please Login</h1>
      <div className="form-control w-full max-w-xs m-auto">
        <label className="label">
          <span className="label-text">Email</span>
        </label>
        <input
          type="email"
          name="email"
          placeholder="Type email here"
          className="input input-bordered w-full max-w-xs "
          required
        />
      </div>
      <div className="form-control w-full max-w-xs m-auto">
        <label className="label">
          <span className="label-text">Password</span>
        </label>
        <input
          type="password"
          name="password"
          placeholder="Type your password here"
          className="input input-bordered w-full max-w-xs"
          required
        />
      </div>
      <div className="mt-5 mb-10">
        <Link>
          <button className="btn btn-outline">Login</button>
        </Link>
      </div>

      <div className="btn-group btn-group-vertical mb-10">
        <button className="btn btn-primary mt-2">
          <FaGoogle className="mr-3 w-6 h-6" /> Login with Google
        </button>
        <button className="btn btn-primary mt-2">
          <FaGithub className="mr-3 w-6 h-6" /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
