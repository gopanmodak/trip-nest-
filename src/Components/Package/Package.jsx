import React from "react";
import { Link } from "react-router-dom";

const Package = ({ tour }) => {
  return (
    <div>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure className="relative">
          <img
            src={tour.image}
            alt="TourImage"
            className="w-100 h-70 border border-gray-200 p-2 rounded-xl"
          />
          <div className="absolute top-5 right-10 flex justify-center items-center gap-2 badge-accent badge">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              className="w-5 h-5 fill-current b"
            >
              <path className="bg-red-800" d="M494,198.671a40.536,40.536,0,0,0-32.174-27.592L345.917,152.242,292.185,47.828a40.7,40.7,0,0,0-72.37,0L166.083,152.242,50.176,171.079a40.7,40.7,0,0,0-22.364,68.827l82.7,83.368-17.9,116.055a40.672,40.672,0,0,0,58.548,42.538L256,428.977l104.843,52.89a40.69,40.69,0,0,0,58.548-42.538l-17.9-116.055,82.7-83.368A40.538,40.538,0,0,0,494,198.671Zm-32.53,18.7L367.4,312.2l20.364,132.01a8.671,8.671,0,0,1-12.509,9.088L256,393.136,136.744,453.3a8.671,8.671,0,0,1-12.509-9.088L144.6,312.2,50.531,217.37a8.7,8.7,0,0,1,4.778-14.706L187.15,181.238,248.269,62.471a8.694,8.694,0,0,1,15.462,0L324.85,181.238l131.841,21.426A8.7,8.7,0,0,1,461.469,217.37Z"></path>
            </svg>
            <span className="text-xl font-bold text-amber-50 py-2">
              {tour.review}
            </span>
          </div>
        </figure>
        <div className="card-body">
          <h2 className="card-title flex justify-between items-center">
            {tour.packageName}
            <span className="badge badge-secondary ">${tour.price}</span>
          </h2>

          <div className="flex flex-row justify-between items-center my-2">
            <p className="text-gray-700 mb-1 p-3 badge badge-outline max-w-40">
              <strong> {tour.city}</strong>
            </p>
          </div>
          <p className="text-gray-700 mb-1">
            <strong>Duration:</strong> {tour.duration}
          </p>

          <div className="flex justify-end items-center">
            <Link
              to={`/packages/${tour._id}`}
              className="btn btn-info text-amber-50 font-semi\"
            >
              View Details
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Package;
