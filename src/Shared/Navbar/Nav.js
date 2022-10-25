import React from "react";
import { Link } from "react-router-dom";
import CH1 from "../../assets/logo/CH1.png";

const Nav = () => {
  return (
    <div className="">
      <div className="navbar bg-primary text-primary-content sm:px-20 pr-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <Link>Courses</Link>
              </li>
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>Blog</Link>
              </li>
            </ul>
          </div>
          <img className="sm:w-14 sm:h-14  w-10 h-10" src={CH1} alt="" />
          <Link className="btn btn-ghost normal-case sm:text-3xl text-2xl font-serif font-bold">
            Course Hero
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <Link>Courses</Link>
            </li>
            <li>
              <Link>FAQ</Link>
            </li>
            <li>
              <Link>Blog</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">LogIn</Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
