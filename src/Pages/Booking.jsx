import React from "react";
import {  } from "react-router-dom";

const Booking = () => {
  
  const bookingData = JSON.parse(localStorage.getItem("bookingData"));


  if (!bookingData) {
    return <p>No booking data available.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
      <h1 className="text-2xl font-bold mb-4">
       {bookingData.packageName}
      </h1>
      <p><strong>First Name:</strong> {bookingData.fname}</p>
      <p><strong>Last Name:</strong> {bookingData.lastname}</p>
      <p><strong>Email:</strong> {bookingData.email}</p>
      <p><strong>Phone:</strong> {bookingData.phone}</p>
      
    </div>
  );
};

export default Booking;
