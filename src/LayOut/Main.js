import React from "react";
import Home from "../Pages/Home/Home";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Navbar/Nav";

import Sidebar from "../Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="">
      <Nav></Nav>
      <div className=" sm:grid sm:grid-cols-12 gap-4 sm:px-20 flex flex-col-reverse">
        <div className="sm:col-span-3 m-2 sm:m-0">
          <Sidebar></Sidebar>
        </div>
        <div className="sm:col-span-9 m-2 sm:m-0">
          <Home></Home>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
