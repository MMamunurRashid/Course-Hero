import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetch("https://course-hero-server.vercel.app/course")
      .then((res) => res.json())
      .then((data) => setCourses(data));
  }, []);

  return (
    <div className="">
      <h1 className=" text-3xl font-serif text-center mb-5 mt-3">
        Our Courses
      </h1>
      {courses.map((c) => (
        <p
          key={c.id}
          className="text-xl text-white border rounded-lg mb-2 p-2 hover:bg-blue-900"
        >
          <Link to={`/course/${c.id}`}>{c.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default Sidebar;
