import React, { useContext } from "react";
import { TailSpin } from "react-loader-spinner";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
  // import user,loading from authContext
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  //show loading in private route.
  if (loading) {
    return (
      <div className="flex justify-center mt-32 mb-32">
        <TailSpin
          height="80"
          width="80"
          color="#4fa94d"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
