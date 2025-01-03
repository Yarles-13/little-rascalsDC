"use client";
import React from "react";

const ForParents = () => {
  return (
    <div className="bg-gradient-to-br from-[#c8c4be] to-[#f4f0ea] min-h-screen px-20 sm:p-12">
      {/* Header Section */}
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-cactusGreen">Welcome Parents!</h1>
        <p className="text-xl text-gray-700 mt-4">
          Everything You Need to Know About Your Child's Day at Little Rascals Daycare.
        </p>
      </header>

      {/* Daily Schedule Section */}
      <section className="bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-4xl font-bold text-terracotta mb-8 text-center">
          A Day in the Life at Little Rascals
        </h2>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-[#D4761B] text-white">
                <th className="p-4 text-lg">Time</th>
                <th className="p-4 text-lg">Activity</th>
              </tr>
            </thead>
            <tbody>
              {[
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
              ].map((item, index) => (
                <tr key={index} className="hover:bg-gray-100">
                  <td className="p-4 border">{item.time}</td>
                  <td className="p-4 border">{item.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* What to Bring Section */}
      <section className="bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-4xl font-bold text-cactusGreen mb-8 text-center">
          What to Bring
        </h2>

        <ul className="text-lg space-y-6 text-gray-800 list-disc pl-8">
          <li>Extra change of clothes (to leave at school).</li>
          <li>Labeled leak/spill-proof bottle of water (brought daily).</li>
          <li>
            Box of diapers (for non-potty-trained children) to leave with the teacher.
          </li>
          <li>Labeled outerwear for cooler weather.</li>
          <li>
            Medications (with original packaging and completed forms) for daily use.
          </li>
          <li>
            Nut-free lunch with a cold pack (full-day students only).
          </li>
          <li>
            Crib sheet and blanket for mats (full-day students only).
          </li>
        </ul>
      </section>

      {/* Illness and Medication Section */}
      <section className="bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-4xl font-bold text-terracotta mb-8 text-center">
          Illness and Medication Policy
        </h2>

        <div className="text-lg text-gray-800 space-y-6 leading-relaxed">
          <p>
            If your child is ill or symptomatic, please do not bring them to school.
            We are not equipped to care for sick children and want to ensure the
            well-being of others.
          </p>
          <p>
            Medications must be submitted in their original packaging to the director
            with completed consent forms. No medications should be sent with your
            child.
          </p>
          <p>
            Children must be symptom-free for at least 48 hours before returning to
            school. This includes being free from fever, vomiting, or other symptoms.
          </p>
          <p>
            Please notify the staff if your child contracts a communicable disease. A
            doctor's note may be required to return to school.
          </p>
        </div>
      </section>

      {/* Emergency Contact Section */}
      <section className="bg-white shadow-md rounded-lg p-8">
        <h2 className="text-4xl font-bold text-cactusGreen mb-8 text-center">
          Emergency Contact Information
        </h2>

        <div className="text-lg text-gray-800 space-y-6 leading-relaxed">
          <p>
            Ensure that emergency contact information is up to date and that listed
            contacts are aware and able to pick up your child if necessary.
          </p>
          <p>
            If we cannot contact a parent, we will go down the list of emergency
            contacts provided. Immediate pick-up within 30 minutes is required upon
            notification.
          </p>
        </div>
      </section>
    </div>
  );
};

export default ForParents;
