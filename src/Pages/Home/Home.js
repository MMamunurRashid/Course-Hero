import React from "react";
import CourseHero from "../../assets/banner/CourseHero.png";
const Home = () => {
  return (
    <div className="text-center mt-5">
      <img className="w-full rounded-lg" src={CourseHero} alt="" />
      <h1 className="text-3xl font-serif mt-3 text-white">
        Welcome to Course Hero
      </h1>
      <p>The Learning platform</p>
      <p className="text-lg">
        This is the website, where you can get many more Computer Science and
        Engineering Courses. If you want be a good CSE graduate you have learn
        course like - Theory of computation, Computer Architecture, Operating
        System, Data Structure and Algorithm,Programming in C,C++,Java,C# etc.
        Yes you are in the right place. We have these course, and we confident
        enough we can able to teach you these course. Be with US.
      </p>
    </div>
  );
};

export default Home;
