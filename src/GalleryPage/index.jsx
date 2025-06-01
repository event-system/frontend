import React from "react";
import Sidebar from "../EventPage/Sidebar";

const events = [
  {
    id: 1,
    title: "Echo Beats Festival",
    category: "Music",
    date: "May 20, 2029",
    color: "text-indigo-600",
  },
  {
    id: 2,
    title: "Culinary Delights Festival",
    category: "Food & Culinary",
    date: "May 25, 2029",
    color: "text-green-600",
  },
  {
    id: 3,
    title: "Artistry Unveiled Expo",
    category: "Art & Design",
    date: "May 15, 2029",
    color: "text-pink-600",
  },
  {
    id: 4,
    title: "Tech Future Expo",
    category: "Technology",
    date: "June 1, 2029",
    color: "text-indigo-600",
  },
  {
    id: 5,
    title: "Runway Revolution 2029",
    category: "Fashion",
    date: "May 1, 2029",
    color: "text-pink-600",
  },
  {
    id: 6,
    title: "Global Wellness Summit",
    category: "Health & Wellness",
    date: "May 5, 2029",
    color: "text-green-600",
  },
  {
    id: 7,
    title: "Adventure Gear Show",
    category: "Outdoor & Adventure",
    date: "June 5, 2029",
    color: "text-green-600",
  },
  {
    id: 8,
    title: "Symphony Under the Stars",
    category: "Music",
    date: "April 20, 2029",
    color: "text-indigo-600",
  },
  {
    id: 9,
    title: "Harmony Health Fair",
    category: "Health & Wellness",
    date: "June 15, 2029",
    color: "text-green-600",
  },
  {
    id: 10,
    title: "Live Paint Battle",
    category: "Art & Design",
    date: "June 20, 2029",
    color: "text-pink-600",
  },
  {
    id: 11,
    title: "Spring Trends Runway",
    category: "Fashion",
    date: "June 10, 2029",
    color: "text-pink-600",
  },
  {
    id: 12,
    title: "Champions League Final Viewing Party",
    category: "Sports",
    date: "May 10, 2029",
    color: "text-indigo-600",
  },
];

const GalleryPage = () => {
  return (
    <div class="flex">
      <Sidebar />
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Top Controls */}

        {/* Event Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((evt) => (
            <div
              key={evt.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="h-40 bg-gray-300"></div>

              {/* Card Body */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {evt.title}
                  </h3>
                  {/* Vertical Ellipsis Icon */}
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4zm0 6a2 2 0 110-4 2 2 0 010 4z" />
                    </svg>
                  </button>
                </div>
                <p className={`mt-1 text-xs ${evt.color}`}>
                  {evt.category} &bull; {evt.date}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer / Pagination */}
      </div>
    </div>
  );
};

export default GalleryPage;
