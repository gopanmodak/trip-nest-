import React from "react";

import newsLetter from "../../assets/newslatter.jpg";
import sampleVideo from "../../assets/newBd.mp4";

const HDownSection = () => {
  return (
    <div className="my-20">
      <div>
        <div className="flex flex-col justify-center items-center text-center gap-5">
          <h1 className="font-extrabold text-3xl lg:text-5xl text-[#131318]">
            Why Choose TripNest
          </h1>

          <p className="text-lg lg:text-2xl max-w-2xl text-[#5A5A5D] text-center">
            We make travel simple, affordable, and stress-free—so you can focus
            on the journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 mt-40 max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-5 bg-[#dff7a7] p-10 rounded-xl min-h-90 shadow-2xl">
            <img
              src="https://cdn-icons-png.flaticon.com/128/8209/8209385.png"
              alt=""
              className="h-16 w-16"
            />
            <h1 className="text-[#131318] text-3xl font-extrabold">
              Handpicked Hotels
            </h1>
            <p className="text-[#5A5A5D]">
              At TripNest, we select hotels and stays to ensure comfort, safety,
              and quality. Each property is chosen based on cleanliness,
              location, and reviews. From luxury resorts to budget options, we
              provide reliable accommodations so travelers can relax and enjoy
              their journey without worry, making every trip stress-free.
            </p>
          </div>

          <div className="flex flex-col gap-5  bg-[#dff7a7] p-10 rounded-xl min-h-90 shadow-2xl">
            <img
              src="https://cdn-icons-png.flaticon.com/128/10913/10913658.png"
              alt=""
              className="h-16 w-16"
            />
            <h1 className="text-[#131318] text-3xl font-extrabold">
              World Class Service
            </h1>
            <p className="text-[#5A5A5D]">
              At TripNest, we offer world-class service to make your trips
              smooth and enjoyable. Our team is always ready to assist you with
              booking, travel support, and guidance, ensuring comfort, safety,
              and a memorable journey every time.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-30 mt-15 max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-5 bg-[#dff7a7] p-10 rounded-xl max-w-140 shadow-2xl">
            <img
              src="https://cdn-icons-png.flaticon.com/128/3462/3462067.png"
              alt=""
              className="h-16 w-16"
            />
            <h1 className="text-[#131318] text-3xl font-extrabold">
              Best Price Guarantee
            </h1>
            <p className="text-[#5A5A5D]">
              At TripNest, we ensure you get the best prices for every trip. Our
              transparent pricing guarantees no hidden fees, so you can book
              confidently and enjoy your journey without worrying about extra
              costs.
            </p>
          </div>

          <div className="flex flex-col gap-5 p-10 rounded-xl max-w-140">
            <h1 className="text-[#131318] text-3xl font-extrabold text-center">
              Deals & Discounts
            </h1>
            <p className="text-[#5A5A5D]">
              TripNest offers exciting deals and discounts on trips, hotels, and
              packages. Enjoy special offers, seasonal promotions, and exclusive
              savings to make your travel affordable and memorable every time.
            </p>
          </div>
        </div>
      </div>



<div className="max-w-7xl mx-auto my-50 grid grid-cols-1 md:grid-cols-2 justify-center items-center gap-10 mt-40 px-4">

    <div className="flex flex-col gap-5">
        <h1 className="text-3xl font-extrabold ">A Simple Perfect Place To Get Lost</h1>
        <p className="text-[#5A5A5D]">Explore serene mountains, quiet beaches, hidden trails, cozy stays, local flavors, and unforgettable moments for a relaxing, memorable journey.</p>

        <ul className="font-bold list-disc ml-6 space-y">
            <li >Trek through serene mountains, kayak in calm rivers, hike hidden forest trails, lounge on pristine beaches and enjoy sunset meditation. </li>
            <li>
                Capture breathtaking landscapes, sample local delicacies, meet friendly locals, and create unforgettable travel stories on every journey.
            </li>
        </ul>
    </div>

    <div>
         <video
        src={sampleVideo}
        controls
        autoPlay={false}
        loop
        muted
        className="h-80 w-full max-w-3xl rounded-lg object-cover"
      />
    </div>
</div>









      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 justify-center items-center gap-10 mt-40 px-4">
        <form
          action=""
          className="col-span-5 border border-gray-800 p-10 rounded-xl flex flex-col gap-5"
        >
          <h1 className="font-extrabold text-[#131318] text-2xl">Newsletter</h1>
          <p className="txt[#5A5A5D] border-b-2-[#5A5A5D] mt-2 mb-4 max-w-90">
            Get your daily dose of travel news & tips. Sign up today!
          </p>
          <div class="border-b-2 border-gray-600"></div>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="bg-emerald-100 p-3 rounded-md"
          />
          <input
            type="password"
            name=""
            id=""
            placeholder="Enter Your Password"
            className="bg-emerald-100 p-3 rounded-md"
          />
          <button className="bg-[#FF5400] text-[#FFFFFF] font-extrabold p-3 rounded-2xl hover:bg-amber-400 transition-all duration-1000" type="submited">
            Subscribe
          </button>
        </form>

        <div className="col-span-7 border-amber-200">
          <img
            src={newsLetter}
            alt=""
            className="h-108 w-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HDownSection;
