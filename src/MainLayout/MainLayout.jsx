import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
    

      <div className="pt-40">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
};

export default MainLayout;
