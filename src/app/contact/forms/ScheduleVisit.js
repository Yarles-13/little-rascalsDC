
// 'use client';

// import React, { useState } from 'react';

// const ScheduleVisitForm = () => {
//   const [formData, setFormData] = useState({
//     parentFirstName: '',
//     parentMiddleName: '',
//     parentLastName: '',
//     parentPhone: '',
//     parentEmail: '',
//     tourDate: '',
//     tourTime: '',
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:8000/api/schedule-visit', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData), 
//       });
//       const data = await response.json();
//       if (response.ok) {
//         alert(data.message);
//       } else {
//         alert(data.error);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Something went wrong. Please try again later.");
//     }
//   };
  

//   const isValidDate = (date) => {
//     const selectedDate = new Date(date);
//     const day = selectedDate.getDay();
//     return day !== 0 && day !== 6; // Exclude weekends
//   };

//   return (
//     <div className="max-w-screen w-full mx-auto bg-[#e0e4d8] shadow-lg rounded-lg p-6 md:p-12 lg:p-16 text-xl md:text-2xl">
//       <form onSubmit={handleSubmit} className="space-y-8">
//         <h1 className="text-3xl md:text-5xl text-center text-black font-bold">
//           Fill out this form to set up an appointment
//         </h1>

//         {/* Parent's Information */}
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//           <div>
//             <label className="block font-medium text-gray-600 text-lg md:text-2xl">
//               <p> Parent First Name</p>

//               <input
//                 type="text"
//                 name="parentFirstName"
//                 value={formData.parentFirstName}
//                 onChange={handleChange}
//                 placeholder="Enter Parent's First Name"
//                 required
//                 className="w-full border border-black rounded-md px-4 py-4 md:px-6 md:py-6 text-lg md:text-2xl"
//               />
//             </label>

//           </div>

//           <div>
//             <label className="block font-medium text-gray-600 text-lg md:text-2xl">
//               <p>Middle Name (Optional)</p>

//               <input
//                 type="text"
//                 name="parentMiddleName"
//                 value={formData.parentMiddleName}
//                 onChange={handleChange}
//                 placeholder="Enter Middle Name"
//                 className="w-full border border-black rounded-md px-4 py-4 md:px-6 md:py-6 text-lg md:text-2xl"
//               />
//             </label>
//           </div>

//           <div>
//             <label className="block font-medium text-gray-600 text-lg md:text-2xl">
//               <p>Parent Last Name</p>

//               <input
//                 type="text"
//                 name="parentLastName"
//                 value={formData.parentLastName}
//                 onChange={handleChange}
//                 placeholder="Enter Parent's Last Name"
//                 required
//                 className="w-full border border-black rounded-md px-4 py-4 md:px-6 md:py-6 text-lg md:text-2xl"
//               />
//             </label>
//           </div>
//         </div>

//         {/* Contact Information */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <div>
//             <label className="block font-medium text-gray-600 text-lg md:text-2xl">
//               <p> Phone Number</p>

//               <input
//                 type="tel"
//                 name="parentPhone"
//                 value={formData.parentPhone}
//                 onChange={handleChange}
//                 required
//                 placeholder="e.g., 555-123-4567"
//                 className="w-full border border-black rounded-md px-4 py-4 md:px-6 md:py-6 text-lg md:text-2xl"
//               />
//             </label>
//           </div>
//           <div>
//             <label className="block font-medium text-gray-600 text-lg md:text-2xl">
//               <p>Email Address</p>

//               <input
//                 type="email"
//                 name="parentEmail"
//                 value={formData.parentEmail}
//                 onChange={handleChange}
//                 required
//                 placeholder="e.g., parent@example.com"
//                 className="w-full border border-black rounded-md px-4 py-4 md:px-6 md:py-6 text-lg md:text-2xl"
//               />
//             </label>
//           </div>
//         </div>

//         {/* Schedule a Visit */}
//         <div>
//           <label className="block font-medium text-gray-600 text-lg md:text-2xl">
//             <p>Schedule a Visit Date</p>

//             <input
//               type="date"
//               name="tourDate"
//               value={formData.tourDate}
//               onChange={(e) => {
//                 if (isValidDate(e.target.value)) {
//                   handleChange(e);
//                 } else {
//                   alert('Visits are only allowed on weekdays.');
//                   e.target.value = '';
//                 }
//               }}
//               required
//               className="w-full border border-black rounded-md px-4 py-4 md:px-6 md:py-6 text-lg md:text-2xl"
//             />
//           </label>
//         </div>

//         {/* Time Selection */}
//         <div>
//           <label className="block font-medium text-gray-600 text-lg md:text-2xl">
//             <p>Select a Time Slot</p>

//             <select
//               name="tourTime"
//               value={formData.tourTime}
//               onChange={handleChange}
//               required
//               className="w-full border border-black rounded-md px-4 py-4 md:px-6 md:py-6 text-lg md:text-2xl"
//             >
//               <option value="">-- Select a Time --</option>
//               <option value="4:00 PM">4:00 PM</option>
//               <option value="4:30 PM">4:30 PM</option>
//               <option value="5:00 PM">5:00 PM</option>
//               <option value="5:30 PM">5:30 PM</option>
//             </select>
//           </label>
//         </div>

//         {/* Submit Button */}
//         <button
//           type="submit"
//           className="w-full bg-[#735bdf] text-white font-bold py-4 md:py-6 text-xl md:text-3xl rounded-lg hover:bg-red-500  transition-all"
//         >
//           Submit Request
//         </button>
//       </form>
//     </div>
//   );
// };

// export default ScheduleVisitForm;


"use client";

import React, { useState } from "react";

const ScheduleVisitForm = () => {
  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentMiddleName: "",
    parentLastName: "",
    parentPhone: "",
    parentEmail: "",
    tourDate: "",
    tourTime: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/api/schedule-visit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (response.ok) {
        alert(data.message);
      } else {
        alert(data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  const isValidDate = (date) => {
    const selectedDate = new Date(date);
    const day = selectedDate.getDay();
    return day !== 0 && day !== 6; // Exclude weekends
  };

  return (
    <div className="max-w-6xl w-full mx-auto bg-[#e0e4d8] shadow-lg rounded-lg p-4 sm:p-6 md:p-12 text-base sm:text-lg">
      <form onSubmit={handleSubmit} className="space-y-6 ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-gray-800 mb-6">
          Schedule a Visit
        </h1>

        {/* Parent's Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <label className="block">
            <p className="font-medium text-gray-600">Parent First Name</p>
            <input
              type="text"
              name="parentFirstName"
              value={formData.parentFirstName}
              onChange={handleChange}
              placeholder="Enter First Name"
              required
              className="w-full border border-gray-400 rounded-md px-3 py-2 sm:py-3"
            />
          </label>

          <label className="block">
            <p className="font-medium text-gray-600">Middle Name (Optional)</p>
            <input
              type="text"
              name="parentMiddleName"
              value={formData.parentMiddleName}
              onChange={handleChange}
              placeholder="Enter Middle Name"
              className="w-full border border-gray-400 rounded-md px-3 py-2 sm:py-3"
            />
          </label>

          <label className="block">
            <p className="font-medium text-gray-600">Parent Last Name</p>
            <input
              type="text"
              name="parentLastName"
              value={formData.parentLastName}
              onChange={handleChange}
              placeholder="Enter Last Name"
              required
              className="w-full border border-gray-400 rounded-md px-3 py-2 sm:py-3"
            />
          </label>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <label className="block">
            <p className="font-medium text-gray-600">Phone Number</p>
            <input
              type="tel"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              placeholder="e.g., 555-123-4567"
              required
              className="w-full border border-gray-400 rounded-md px-3 py-2 sm:py-3"
            />
          </label>

          <label className="block">
            <p className="font-medium text-gray-600">Email Address</p>
            <input
              type="email"
              name="parentEmail"
              value={formData.parentEmail}
              onChange={handleChange}
              placeholder="e.g., parent@example.com"
              required
              className="w-full border border-gray-400 rounded-md px-3 py-2 sm:py-3"
            />
          </label>
        </div>

        {/* Schedule a Visit */}
        <label className="block">
          <p className="font-medium text-gray-600">Visit Date</p>
          <input
            type="date"
            name="tourDate"
            value={formData.tourDate}
            onChange={(e) => {
              if (isValidDate(e.target.value)) {
                handleChange(e);
              } else {
                alert("Visits are only allowed on weekdays.");
                e.target.value = "";
              }
            }}
            required
            className="w-full border border-gray-400 rounded-md px-3 py-2 sm:py-3"
          />
        </label>

        {/* Time Selection */}
        <label className="block">
          <p className="font-medium text-gray-600">Select a Time</p>
          <select
            name="tourTime"
            value={formData.tourTime}
            onChange={handleChange}
            required
            className="w-full border border-gray-400 rounded-md px-3 py-2 sm:py-3"
          >
            <option value="">-- Select a Time --</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="4:30 PM">4:30 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="5:30 PM">5:30 PM</option>
          </select>
        </label>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#735bdf] text-white font-bold py-3 rounded-md hover:bg-red-500 transition-all"
        >
          Schedule
        </button>
      </form>
    </div>
  );
};

export default ScheduleVisitForm;
