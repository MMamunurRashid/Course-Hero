import { useLoaderData } from "react-router-dom";

const EachCourse = () => {
  const eachCourse = useLoaderData();
  console.log(eachCourse);
  //   const { name } = eachCourse;
  //   console.log(name);

  return <div className="sm:mx-32 sm:mb-32">each course</div>;
};

export default EachCourse;
