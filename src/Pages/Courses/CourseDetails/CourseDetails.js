import React from "react";
import { useLoaderData } from "react-router-dom";

const CourseDetails = () => {
  const course = useLoaderData();
  console.log(course);
  return <div>Course details : </div>;
};

export default CourseDetails;
