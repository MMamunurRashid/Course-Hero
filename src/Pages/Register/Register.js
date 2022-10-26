import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Register = () => {
  const [error, setError] = useState(" ");
  const [success, setSuccess] = useState("");

  const { createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photoURL = form.photoURL.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photoURL, email, password);

    if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
      setError("Please use at least 2 uppercase");
      return;
    }
    if (!/(?=.[!@#&$*])/.test(password)) {
      setError("Please use at least One spacial character");
      return;
    }
    if (password.length < 6) {
      setError("Password Should be 6 character");
      return;
    }
    setError("");

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setError("");
        setSuccess("Registration Successful!! Now you can login.");
        form.reset();
        handleUpdateUserProfile(name, photoURL);
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setSuccess("");
      });
  };

  const handleUpdateUserProfile = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  return (
    <div className="w-4/5 m-auto  text-center ">
      <h1 className="text-5xl mb-10 mt-5">Please Register</h1>
      <p className=" text-red-600">{error}</p>
      <p className="text-slate-50">{success}</p>
      <form onSubmit={handleSubmit}>
        <div className="form-control w-full max-w-xs m-auto">
          <label className="label">
            <span className="label-text">Full Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Type email here"
            className="input input-bordered w-full max-w-xs "
            required
          />

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
          <button type="submit" className="btn btn-outline">
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
