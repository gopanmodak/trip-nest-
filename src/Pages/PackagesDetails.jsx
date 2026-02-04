import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Modal from "../Components/Modal/Modal";

const PackagesDetails = () => {
  const packageData = useLoaderData();
  const navigaate = useNavigate();
  

  const handleOnClick =() =>{
   
    navigaate(-1)
    
  }

  const handleOnBookNow = () =>{
    document.getElementById('my_modal_1').showModal()
   
  }
  return (
   

    <>
    
     <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
      {/* Image */}
      <img
        src={packageData.image}
        alt={packageData.packageName}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />

      {/* Package Title */}
      <h1 className="text-3xl font-bold mb-2">{packageData.packageName}</h1>
      <p className="text-gray-600 mb-4">
        {packageData.city} | {packageData.duration} | ⭐ {packageData.review}
      </p>

      {/* Price */}
      <p className="text-2xl font-semibold text-green-600 mb-4">
        ৳ {packageData.price}
      </p>

      {/* Details */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">About this package</h2>
        <p className="text-gray-700">{packageData.details}</p>
      </div>

      {/* Includes */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Includes</h2>
        <ul className="list-disc list-inside text-gray-700">
          {packageData.includes.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Hotel Info */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Hotel</h2>
        <p className="text-gray-700">{packageData.hotelName}</p>
      </div>

      {/* Book Button */}
      <div className="flex justify-between">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition" onClick={handleOnBookNow}>
          Book Now
        </button>
        <button
          className="bg-black text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition"
          onClick={handleOnClick}
        >
          Back to Packages
        </button>
      </div>
    </div>

    <Modal  packageData={packageData}/>
    </>
  );
};

export default PackagesDetails;
