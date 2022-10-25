import React from "react";
import Home from "../Pages/Home/Home";
import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Navbar/Nav";
import Navbar from "../Shared/Navbar/Navbar";
import Sidebar from "../Shared/Sidebar/Sidebar";

const Main = () => {
  return (
    <div className="">
      <Nav></Nav>
      <div className="grid grid-cols-12 gap-4 sm:px-20">
        <div className="col-span-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-span-9">
          <Home></Home>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Main;
