import React from "react";
import { useLoaderData } from "react-router-dom";

import Pdf from "react-to-pdf";

const ref = React.createRef();
const options = {
  orientation: "landscape",
};
export default function Download() {
  const course = useLoaderData();
  const { name, picture, price } = course;
  return (
    <div className="App">
      <Pdf targetRef={ref} filename={`${name}.pdf`} options={options}>
        {({ toPdf }) => (
          <button className="btn hover:text-white mt-5 mb-5" onClick={toPdf}>
            DownLoad
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <div className="card sm:w-1/2  m-auto bg-base-100 shadow-xl ">
          <figure>
            <img
              className="rounded-xl w-11/12 h-72"
              src={picture}
              alt="courses"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title  text-xl sm:text-2xl font-serif font-semibold">
              Course Name: {name}
            </h2>
            <p className="text-lg sm:text-xl ">Course Fee: {price} BDT</p>
          </div>
        </div>
      </div>
    </div>
  );
}
