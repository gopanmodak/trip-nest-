import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Packages from "../Pages/Packages";
import Booking from "../Pages/Booking";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";

export const routes = createBrowserRouter ([

    {
        path:"/",
        element:<MainLayout />,
        children:[
            {
                index:true,
                element:<Home />
            },
            {
                path:"packages",
                element:<Packages />
            },
            {
                path:"booking",
                element:<Booking />
            },
            {
                path:"contact",
                element:<Contact />
            },
            {
                path:"blog",
                element:<Blog />
            }
        ]
    }
 ])