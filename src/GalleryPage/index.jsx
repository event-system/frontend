import { useEffect, useState } from "react";
import Sidebar from "../EventPage/Sidebar";

const GalleryPage = () => {

  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Fetch events from the API
    const fetchEvents = async () => {
      const url = import.meta.env.VITE_GALLERY_URL ?? "ABAN-GALLERY-URL";

        const response = await fetch(url);
        const data = await response.json();
        setEvents(data);

    };

    fetchEvents();
  }, []);
  return (
    <div className="flex">
      <Sidebar />
      <div className="min-h-screen bg-gray-100 p-6">
        {/* Top Controls */}

        {/* Event Card Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {events.map((evt) => (
            <div
              key={evt.Id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              {/* Image Placeholder */}
              <div className="h-40 bg-gray-300">
                <img
                  src={evt.Url}
                  alt={evt.Title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Card Body */}
              <div className="p-4">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm font-semibold text-gray-800">
                    {evt.Title}
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
                <p className={`mt-1 text-xs ${evt.Color}`}>
                  {evt.Category} &bull; {evt.Date}
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
