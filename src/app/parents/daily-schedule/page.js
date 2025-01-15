"use client";
import React from "react";

const DailySchedule = () => {
  const schedule = [
    { time: "6:30 AM", activity: "Arrival and Free Play" },
    { time: "7:00 AM", activity: "Breakfast Time" },
    { time: "8:00 AM", activity: "Arts and Crafts" },
    { time: "10:00 AM", activity: "Outdoor Play" },
    { time: "10:30 AM", activity: "Snack time" },
    { time: "11:30 AM", activity: "Storytime" },
    { time: "12:00 PM", activity: "Lunch" },
    { time: "12:30 PM", activity: "Nap/Rest Time" },
    { time: "2:30 PM", activity: "Group Activities" },
    { time: "4:00 PM", activity: "Wind-Down and Pick-Up" },
  ];

  return (
    <section className="shadow-md  rounded-lg py-40 bg-[#f8fbf4]  ">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-5xl font-bold text-yellow-500 mb-12 text-center mt-30">
          A Day in the Life at Little Rascals
        </h2>

        <div className="px-8 md:px-20 lg:px-32">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#735bdf] text-white">
                <th className="p-5 text-lg">Time</th>
                <th className="p-5 text-lg">Activity</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                <tr key={index} className="hover:bg-[#b3a3d8] hover:text-white odd:bg-gray-200 even:bg-gray-50">
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
