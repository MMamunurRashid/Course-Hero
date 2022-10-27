import React from "react";
import { Link } from "react-router-dom";

const Course = ({ course }) => {
  //import course data via props. useLoaderData() is in Courses file.
  const { id, name, picture, price } = course;
  return (
    <div className="mb-5">
      <div className="card sm:w-96 glass">
        <figure>
          <img className="w-full h-60 " src={picture} alt="course" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Course Fee: {price}</p>
          <div className="card-actions justify-end">
            <Link to={`/course/${id}`}>
              <button className="btn btn-primary">View Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Course;
