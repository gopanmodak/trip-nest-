import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/Home";
import Packages from "../Pages/Packages";
import Booking from "../Pages/Booking";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";
import PackagesDetails from "../Pages/PackagesDetails";

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
        loader: async () => await fetch("/public/tourPackages.json"),
      },

      {
        path: "packages/:id",
        element: <PackagesDetails />,

        loader: async ({ params }) => {
          const result = await fetch("/public/tourPackages.json");
          const packageData = await result.json();
          return packageData.find((data) => data.id == params.id);
        },
      },
      {
        path: "booking",
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
    ],
  },
]);
