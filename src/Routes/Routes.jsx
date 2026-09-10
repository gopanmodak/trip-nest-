import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Packages from "../Pages/Packages";
import Booking from "../Pages/Booking";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import PackagesDetails from "../Pages/PackagesDetails";
import Login from "../Pages/Login";
import Signin from "../Pages/Signin";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "packages",
        element: <Packages />,
       
      },

      {
        path: "packages/:_id",
        element:<PrivateRoutes>

          <PackagesDetails />
        </PrivateRoutes> ,

      
        
      },
      {
        path: "booking",
        element: <Booking />,
      },
      {
        path: "booking/:id",
        element: <Booking />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Signin />,
      },
    
    ],
  },
]);
