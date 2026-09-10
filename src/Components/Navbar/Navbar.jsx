import React, { useContext } from "react";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const Navbar = () => {
  const { user,logOut } = useContext(AuthContext);
  return (
    <div className="flex lg:flex-row flex-col justify-between items-center fixed left-0 right-0 top-0 p-4 shadow-lg md:w-full z-50 backdrop-blur-md bg-white">
      <div className="mx-20">
        <img src={logo} alt="logo" className="h-20 rounded" />
      </div>

      <div className="flex gap-4 justify-center items-center mx-20">
        <NavLink to="/"> Home </NavLink>
        <NavLink to="/packages"> Packages </NavLink>
        <NavLink to="/booking"> Booking </NavLink>
        <NavLink to="blog"> Blog </NavLink>
        <NavLink to="/contact"> Contact </NavLink>
        {user ? (
          <div className="group relative">
            {" "}
           <div className="flex gap-2 items-center">
            <p>{user.displayName}</p>
              <button
              onClick={() => {
               logOut()
              }}
              className="btn "
            >
              Logout
            </button>

           </div>
          
          </div>
        ) : (
          <div>
            {" "}
            <NavLink to="/login"> Log In </NavLink>
            <NavLink to="/signup"> Sign In </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
