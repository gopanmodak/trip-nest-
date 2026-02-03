import React from "react";
import { useLoaderData } from "react-router-dom";
import Package from "../Components/Package/Package";

const Packages = () => {
  const tourPackages = useLoaderData();

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
      <h1 className="text-center text-4xl font-bold mb-15">
        <span class="text-2xl font-bold bg-linear-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
          Our Most Popular Packages
        </span>
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 ">
        {tourPackages.map((tour) => (
          <Package key={tour.id} tour={tour} />
        ))}
      </div>
    </div>
  );
};

export default Packages;
