import React from "react";
import { FaCalendarAlt, FaUserAlt, FaArrowRight } from "react-icons/fa";

const blogData = [
  {
    id: 1,
    title: "Top 10 Beautiful Places in Bangladesh",
    description:
      "Discover the most breathtaking destinations in Bangladesh for your next adventure.",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
    date: "February 20, 2026",
    author: "Admin",
  },
  {
    id: 2,
    title: "How to Plan a Budget Friendly Trip",
    description:
      "Learn how to travel smart and save money while exploring the world.",
    image:
      "https://images.unsplash.com/photo-1491553895911-0055eca6402d",
    date: "February 18, 2026",
    author: "TripNext Team",
  },
  {
    id: 3,
    title: "Best Travel Tips for Beginners",
    description:
      "Essential travel tips every beginner should know before starting their journey.",
    image:
      "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800",
    date: "February 15, 2026",
    author: "Admin",
  },
];

const Blog = () => {
  return (
    <div className="bg-base-100 py-16 px-4 md:px-10">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          TripNext Travel Blog
        </h1>
        <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
          Explore travel stories, tips, and destination guides from around the world.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogData.map((blog) => (
          <div
            key={blog.id}
            className="card bg-base-200 shadow-xl hover:shadow-2xl transition duration-300"
          >
            <figure>
              <img
                src={blog.image}
                alt={blog.title}
                className="h-56 w-full object-cover"
              />
            </figure>

            <div className="card-body">
              <h2 className="card-title text-lg font-bold">
                {blog.title}
              </h2>

              <p className="text-sm text-gray-500">
                {blog.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                <span className="flex items-center gap-2">
                  <FaCalendarAlt /> {blog.date}
                </span>
                <span className="flex items-center gap-2">
                  <FaUserAlt /> {blog.author}
                </span>
              </div>

              {/* Button */}
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary btn-sm gap-2">
                  Read More <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;