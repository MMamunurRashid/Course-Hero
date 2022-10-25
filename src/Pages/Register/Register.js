import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-4/5 m-auto  text-center ">
      <h1 className="text-5xl mb-10 mt-5">Please Register</h1>
      <form>
        <div className="form-control w-full max-w-xs m-auto">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type email here"
            className="input input-bordered w-full max-w-xs "
            required
          />
        </div>
        <div className="form-control w-full max-w-xs m-auto">
          <label className="label">
            <span className="label-text">PhotoURL</span>
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="Type email here"
            className="input input-bordered w-full max-w-xs "
            required
          />
        </div>
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
        <p className="mt-3 mb-5">
          You have already an account?{" "}
          <Link className=" text-blue-700" to="/login">
            Please Login
          </Link>
        </p>
        <div className="mt-5 mb-10">
          <Link>
            <button className="btn btn-outline">Register</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
