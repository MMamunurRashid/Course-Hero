import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";
import { GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";

const Login = () => {
  //state for showing error and success message.
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  //navigate the path,  before login after login.
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  //import AuthContext, and implement github, google , email pass login.
  const { signIn, googleLogin, githubLogin } = useContext(AuthContext);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  //handle google login auth
  const handleGoogleLogin = () => {
    googleLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Log In Successful!!");
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  //handle github login auth
  const handleGitHubLogin = () => {
    githubLogin(githubProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        setSuccess("Log In Successful!!");
        navigate(from, { replace: true });
      })
      .catch((error) => console.error(error));
  };

  //handle email pass auth
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
        setSuccess("Log In Successful!!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
        setSuccess(false);
      });
  };
  return (
    <div className="w-4/5 m-auto  text-center ">
      <h1 className=" text-2xl sm:text-5xl mb-10 mt-5">Please Login</h1>
      <p className=" text-red-600">{error}</p>
      <p className="text-slate-50">{success}</p>
      <form onSubmit={handleSubmit}>
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
          You don't have any account?{" "}
          <Link className=" text-blue-700" to="/register">
            Please Register
          </Link>
        </p>
        <div className="mt-5 mb-10">
          <button type="submit" className="btn btn-outline">
            Login
          </button>
        </div>
      </form>

      <div className="btn-group btn-group-vertical mb-10">
        <button onClick={handleGoogleLogin} className="btn btn-primary mt-2">
          <FaGoogle className="mr-3 w-6 h-6" /> Login with Google
        </button>
        <button onClick={handleGitHubLogin} className="btn btn-primary mt-2">
          <FaGithub className="mr-3 w-6 h-6" /> Login with GitHub
        </button>
      </div>
    </div>
  );
};

export default Login;
