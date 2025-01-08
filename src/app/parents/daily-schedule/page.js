"use client";
import React from "react";

const DailySchedule = () => {
  const schedule = [
    { time: "6:00 AM", activity: "Arrival, Welcome, and Free Play" },
    { time: "7:00 AM", activity: "Breakfast Time" },
    { time: "7:30 AM", activity: "Circle Time and Morning Songs" },
    { time: "8:00 AM", activity: "Educational Activities (ABC, 123, Colors)" },
    { time: "9:00 AM", activity: "Outdoor Play (Weather Permitting)" },
    { time: "10:00 AM", activity: "Snack Time" },
    { time: "10:30 AM", activity: "Arts and Crafts" },
    { time: "11:30 AM", activity: "Storytime and Quiet Activities" },
    { time: "12:00 PM", activity: "Lunch (Full-Day Students Only)" },
    { time: "12:30 PM", activity: "Nap/Rest Time (Full-Day Students Only)" },
    { time: "2:00 PM", activity: "Afternoon Snack" },
    { time: "2:30 PM", activity: "Indoor or Outdoor Free Play" },
    { time: "3:30 PM", activity: "Structured Group Activities" },
    { time: "4:00 PM", activity: "Wind-Down and Pick-Up" },
  ];

  return (
    <section className="shadow-md bg-yellow-400 rounded-lg py-40   ">
      <div className="mx-auto max-w-7xl">
      <h2 className="text-5xl font-bold text-black mb-12 text-center mt-30">
        A Day in the Life at Little Rascals
      </h2>

      <div className="px-8 md:px-20 lg:px-32">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="p-5 text-lg">Time</th>
              <th className="p-5 text-lg">Activity</th>
            </tr>
          </thead>
          <tbody>
            {schedule.map((item, index) => (
              <tr key={index} className="hover:bg-blue-900 hover:text-white odd:bg-gray-200 even:bg-gray-50">
                <td className="p-5 border text-2xl">{item.time}</td>
                <td className="p-5 border text-2xl">{item.activity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
      
    </section>
  );
};

export default DailySchedule;
