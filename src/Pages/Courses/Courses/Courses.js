import React from "react";
import { useLoaderData } from "react-router-dom";
import Course from "../Course/Course";

const Courses = () => {
  const courses = useLoaderData();
  return (
    <div>
      <p className="text-5xl text-center font-serif mt-5 mb-5">
        We have {courses.length} Courses{" "}
      </p>
      <div className="grid sm:grid-cols-2 sm:ml-5 ml-2 ">
        {courses.map((course) => (
          <Course key={course.id} course={course}></Course>
        ))}
      </div>
    </div>
  );
};

export default Courses;
