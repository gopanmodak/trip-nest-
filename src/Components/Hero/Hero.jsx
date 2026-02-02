import React from "react";
import heroImage from "../../assets/bannermain.jpg";

const Hero = () => {
  return (
    <section className=" px-4">
      <div className="relative max-w-7xl mx-auto">
        
    
        <img
          src={heroImage}
          alt="TripNest Banner"
          className="w-full h-[70vh] object-cover rounded-2xl"
        />

    
        <div className="absolute inset-0 bg-black/40 rounded-2xl"></div>


        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Plan Your Perfect Journey with TripNest
          </h1>

          <p className="text-gray-200 max-w-2xl mb-6">
            Discover amazing destinations, plan stress-free trips, and travel
            with comfort and confidence. TripNest helps you explore the world
            your way.
          </p>

          <button className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-full transition">
            Explore Now
          </button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
