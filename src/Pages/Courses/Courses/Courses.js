import React from "react";
import { useLoaderData } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";
import Course from "../Course/Course";

const Courses = () => {
  //load/fetch data via loader
  const courses = useLoaderData();
  return (
    <div>
      {/* 
      this page is divided two part
      1. side nav
      2. courses content
      */}
      <div className=" sm:grid sm:grid-cols-12 gap-4 sm:px-20 flex flex-col-reverse">
        {/* sidenav */}
        <div className="sm:col-span-3  sm:m-0">
          <Sidebar></Sidebar>
        </div>
        {/* courses content */}
        <div className="sm:col-span-9  sm:m-0">
          <p className="sm:text-5xl text-2xl text-center font-serif mt-5 mb-5">
            We have {courses.length} Courses
          </p>
          <div className="grid sm:grid-cols-2 sm:ml-5 m-2">
            {courses.map((course) => (
              <Course key={course.id} course={course}></Course>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
