import { useLoaderData } from "react-router-dom";

const EachCourse = () => {
  const course = useLoaderData();
  const { name, picture, details, price } = course;

  return (
    <div className="sm:mx-32 sm:mb-32 mt-5 ">
      <div className="card sm:w-1/2 m-auto bg-base-100 shadow-xl">
        <figure>
          <img className="rounded-xl" src={picture} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white text-2xl font-serif font-semibold">
            Course Name: {name}
          </h2>
          <p className="text-xl text-white">Course Fee: {price} BDT</p>
          <p>Why we need to learn {name}?</p>
          <p>{details}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Get Premium Access</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EachCourse;
