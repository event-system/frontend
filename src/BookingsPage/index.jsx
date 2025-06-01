import { ChevronDown, MoreHorizontal } from "lucide-react";
import Sidebar from "../EventPage/Sidebar";
import { useEffect, useState } from "react";

export default function BookingsPage() {
  const [bookingsData, setBookingsData] = useState([]);

  useEffect(() => {
    const fetchBookingsData = async () => {
      const url = import.meta.env.VITE_BOOKINGS_URL ?? "ABAN";
      const response = await fetch(url);
      const data = await response.json();
      setBookingsData(data);
    };
    fetchBookingsData();
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "Confirmed":
        return "bg-purple-100 text-purple-700";
      case "Pending":
        return "bg-blue-100 text-blue-700";
      case "Cancelled":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const getTierColor = (tier) => {
    switch (tier) {
      case "Diamond":
        return "bg-blue-100 text-blue-700";
      case "Platinum":
        return "bg-green-100 text-green-700";
      case "Gold":
        return "bg-yellow-100 text-yellow-700";
      case "Silver":
        return "bg-gray-100 text-gray-700";
      default:
        return "bg-purple-100 text-purple-700";
    }
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="p-6 bg-gray-50 min-h-screen">
        {/* Header Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-purple-500 rounded"></div>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-gray-600 text-sm font-medium">
              Total Bookings
            </h3>
            <p className="text-3xl font-bold text-gray-900">55,000</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-green-500 rounded"></div>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-gray-600 text-sm font-medium">
              Total Tickets Sold
            </h3>
            <p className="text-3xl font-bold text-gray-900">45,000</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-pink-500 rounded"></div>
              </div>
              <MoreHorizontal className="w-5 h-5 text-gray-400" />
            </div>
            <h3 className="text-gray-600 text-sm font-medium">
              Total Earnings
            </h3>
            <p className="text-3xl font-bold text-gray-900">$275,450</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Chart Section */}
          <div className="lg:col-span-2">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  Bookings Overview
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">This Week</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              {/* Chart placeholder */}
              <div className="h-64 relative">
                <div className="absolute left-0 top-0 h-full flex flex-col justify-between text-xs text-gray-500">
                  <span>2K</span>
                  <span>1.5K</span>
                  <span>1K</span>
                  <span>0.5K</span>
                  <span>0</span>
                </div>

                <div className="ml-8 h-full">
                  <svg viewBox="0 0 400 200" className="w-full h-full">
                    <path
                      d="M 0 150 Q 50 120 100 130 T 200 110 T 300 100 T 400 90"
                      stroke="#8B5CF6"
                      strokeWidth="3"
                      fill="none"
                      className="drop-shadow-sm"
                    />
                    <defs>
                      <linearGradient
                        id="gradient"
                        x1="0%"
                        y1="0%"
                        x2="0%"
                        y2="100%"
                      >
                        <stop
                          offset="0%"
                          stopColor="#8B5CF6"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#8B5CF6"
                          stopOpacity="0.1"
                        />
                      </linearGradient>
                    </defs>
                    <path
                      d="M 0 150 Q 50 120 100 130 T 200 110 T 300 100 T 400 90 L 400 200 L 0 200 Z"
                      fill="url(#gradient)"
                    />
                  </svg>
                </div>

                <div className="absolute bottom-0 left-8 right-0 flex justify-between text-xs text-gray-500">
                  <span>Sun</span>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                </div>

                <div className="absolute top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white px-3 py-1 rounded shadow-lg border">
                    <div className="text-xs text-gray-500">Mar 13, 2020</div>
                    <div className="font-semibold">
                      1,396{" "}
                      <span className="text-xs font-normal text-gray-500">
                        Bookings
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Category Breakdown */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Bookings Category
                </h3>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">This Week</span>
                  <ChevronDown className="w-4 h-4 text-gray-400" />
                </div>
              </div>

              <div className="flex items-center justify-center mb-6">
                <div className="relative w-32 h-32">
                  <svg
                    className="w-32 h-32 transform -rotate-90"
                    viewBox="0 0 100 100"
                  >
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#8B5CF6"
                      strokeWidth="8"
                      strokeDasharray="60 40"
                      strokeDashoffset="0"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#3B82F6"
                      strokeWidth="8"
                      strokeDasharray="25 75"
                      strokeDashoffset="-60"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      fill="none"
                      stroke="#10B981"
                      strokeWidth="8"
                      strokeDasharray="15 85"
                      strokeDashoffset="-85"
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center flex-col">
                    <span className="text-xs text-gray-500">
                      Total Bookings
                    </span>
                    <span className="text-2xl font-bold">44,115</span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Music (52.7%)</span>
                  </div>
                  <span className="text-sm font-medium">14,172</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">Sport (22.6%)</span>
                  </div>
                  <span className="text-sm font-medium">12,476</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Fashion (37.6%)
                    </span>
                  </div>
                  <span className="text-sm font-medium">8,906</span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-700">
                      Art & Design (13.6%)
                    </span>
                  </div>
                  <span className="text-sm font-medium">7,661</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bookings Table */}
        <div className="mt-8 bg-white rounded-lg shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4"></div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 border-b border-gray-200">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Invoice ID
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Event
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Ticket Category
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Price
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Qty
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Amount
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    E-Voucher
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {bookingsData.map((booking) => (
                  <tr key={booking.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {booking.date}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {booking.name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 max-w-xs">
                      <div className="font-medium">{booking.event}</div>
                      <div className="text-gray-500 text-xs">
                        {booking.category}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getTierColor(
                          booking.tier
                        )}`}
                      >
                        {booking.tier}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.price}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {booking.qty}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                      {booking.amount}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span
                        className={`inline-flex px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          booking.status
                        )}`}
                      >
                        {booking.status}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {booking.voucher}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
