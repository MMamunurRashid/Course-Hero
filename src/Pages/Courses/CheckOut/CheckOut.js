import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  //import user from AuthContext
  const { user } = useContext(AuthContext);
  const { name } = useLoaderData();

  return (
    <div className="text-center sm:mx-32 sm:mb-32 mt-5 m-2">
      <h1 className="text-xl  text-white ">
        Congratulations{" "}
        <span className="text-xl text-orange-600 font-serif font-semibold">
          {user.displayName}
        </span>{" "}
      </h1>
      <p>Now You're successfully a premium learner of Course Hero</p>
      <p>
        You're enroll for our <strong>{name}</strong> course
      </p>
      <h1>Happy Learning 🥰</h1>
    </div>
  );
};

export default CheckOut;
