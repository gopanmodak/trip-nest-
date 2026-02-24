import React, { useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Modal from "../Components/Modal/Modal";

const PackagesDetails = () => {
  const [openModal, setOpenModal] = useState(false);
  const packageData = useLoaderData();
  const navigate = useNavigate();

  const handleOnClick = () => {
    navigate(-1);
  };

  const handleOnBookNow = () => {
    setOpenModal(true);

  };

  return (
    <>
      <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-8">
        <img
          src={packageData.image}
          alt={packageData.packageName}
          className="w-full h-64 object-cover rounded-lg mb-6"
        />

        <h1 className="text-3xl font-bold mb-2">{packageData.packageName}</h1>

        <p className="text-gray-600 mb-4">
          {packageData.city} | {packageData.duration} | ⭐ {packageData.review}
        </p>

        <p className="text-2xl font-semibold text-green-600 mb-4">
          ৳ {packageData.price}
        </p>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">About this package</h2>
          <p className="text-gray-700">{packageData.details}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Includes</h2>
          <ul className="list-disc list-inside text-gray-700">
            {packageData.includes.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Hotel</h2>
          <p className="text-gray-700">{packageData.hotelName}</p>
        </div>

        <div className="flex justify-between">
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded-lg"
            onClick={handleOnBookNow}
          >
            Book Now
          </button>

          <button
            className="bg-black text-white px-6 py-3 rounded-lg"
            onClick={handleOnClick}
          >
            Back to Packages
          </button>
        </div>
      </div>

      <Modal
        packageData={packageData}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
    </>
  );
};

export default PackagesDetails;
