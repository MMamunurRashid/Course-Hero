import React from "react";
import { useLoaderData } from "react-router-dom";

const CheckOut = () => {
  const { name } = useLoaderData();
  console.log(name);
  return (
    <div>
      CheckOut
      <h1>Course Name: {name}</h1>
    </div>
  );
};

export default CheckOut;
