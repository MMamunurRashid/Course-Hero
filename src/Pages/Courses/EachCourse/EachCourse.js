import { Link, useLoaderData } from "react-router-dom";

const EachCourse = () => {
  //load/fetch data via loader
  const course = useLoaderData();
  const { name, picture, details, price, id } = course;

  return (
    <div className="sm:mx-32 sm:mb-32 mx-2 mt-5 ">
      <div className="flex justify-between items-center sm:w-3/5 sm:m-auto mt-5 mb-3 ">
        <h2 className="card-title text-white text-lg sm:text-2xl font-serif font-semibold">
          Course Name: {name}
        </h2>
        <Link
          to={`/react-to-pdf/${id}`}
          className="tooltip tooltip-left"
          data-tip="Download Course Information"
        >
          <button className="btn">Download</button>
        </Link>
      </div>
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
          <p>Why we need to learn {name}?</p>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <Link
              to={`/checkout/${id}`}
              className="tooltip "
              data-tip="Click for get premium access"
            >
              <button className="btn btn-primary">Get Premium Access</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCourse;
