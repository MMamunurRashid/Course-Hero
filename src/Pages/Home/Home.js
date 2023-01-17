import React from "react";
import { Link } from "react-router-dom";
import CourseHero from "../../assets/banner/CourseHero.png";
const Home = () => {
  return (
    <div className="text-center mt-5 sm:mx-20 sm:mb-40 mx-5 mb-5">
      <img className="w-full rounded-lg" src={CourseHero} alt="" />
      <h1 className="text-3xl font-serif mt-3 ">Welcome to Course Hero</h1>
      <p>The Learning platform</p>
      <p className="text-lg mb-10">
        This is the website, where you can get many more Computer Science and
        Engineering Courses. If you want be a good CSE graduate you have learn
        course like - Theory of computation, Computer Architecture, Operating
        System, Data Structure and Algorithm,Programming in C,C++,Java,C# etc.
        Yes you are in the right place. We have these course, and we confident
        enough we can able to teach you these course. Be with US.
      </p>
      <Link to={`/courses`}>
        <small className="text-xl  border-0 text-white bg-indigo-600 hover:bg-indigo-300  font-semibold rounded-xl px-12 py-1">
          Explore Our Courses
        </small>
      </Link>
    </div>
  );
};

export default Home;
