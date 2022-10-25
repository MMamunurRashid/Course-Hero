import React from "react";
import { Outlet } from "react-router-dom";

import Footer from "../Shared/Footer/Footer";
import Nav from "../Shared/Navbar/Nav";

const Main = () => {
  return (
    <div className="">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
