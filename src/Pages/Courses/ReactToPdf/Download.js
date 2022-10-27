import React from "react";
import { useLoaderData } from "react-router-dom";

import Pdf from "react-to-pdf";

const ref = React.createRef();

export default function Download() {
  const course = useLoaderData();
  const { name, picture, details, price } = course;
  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => (
          <button className="btn mt-5 mb-5" onClick={toPdf}>
            DownLoad
          </button>
        )}
      </Pdf>
      <div ref={ref}>
        <div className="card sm:w-1/2  m-auto bg-base-100 shadow-xl">
          <figure>
            <img className="rounded-xl w-11/12" src={picture} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-white text-xl sm:text-2xl font-serif font-semibold">
              Course Name: {name}
            </h2>
            <p className="text-lg sm:text-xl text-white">
              Course Fee: {price} BDT
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
