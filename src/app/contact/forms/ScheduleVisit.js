'use client';

import React, { useState } from 'react';

const ScheduleVisitForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    parentFirstName: '',
    parentMiddleName: '',
    parentLastName: '',
    parentPhone: '',
    parentEmail: '',
    tourDate: '',
    tourTime: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const isValidDate = (date) => {
    const selectedDate = new Date(date);
    const day = selectedDate.getDay();
    return day !== 0 && day !== 6; // Exclude weekends
  };

  return (
    <div className="w-full bg-[#f4f0ea] shadow-lg rounded-lg p-12 md:p-24 text-2xl">
      <form onSubmit={handleSubmit} className="space-y-10">
      <h1 className="text-4xl text-center text-black font-bold">Fill out this form to set up an appointment </h1>
        

        {/* Parent's Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <label className="block font-medium text-gray-600 text-xl">
              Parent's First Name
            </label>
            <input
              type="text"
              name="parentFirstName"
              value={formData.parentFirstName}
              onChange={handleChange}
              placeholder="Enter Parents First Name"
              required
              className="w-full border border-black  rounded-md px-6 py-4 text-xl"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-600 text-xl">
              Middle Name (Optional)
            </label>
            <input
              type="text"
              name="parentMiddleName"
              value={formData.parentMiddleName}
              onChange={handleChange}
              placeholder="Enter Middle Name"
              className="w-full border border-black  rounded-md px-6 py-4 text-xl"
            />
          </div>

          <div>
            <label className="block font-medium text-gray-600 text-xl">
              Parent's Last Name
            </label>
            <input
              type="text"
              name="parentLastName"
              value={formData.parentLastName}
              onChange={handleChange}
              placeholder="Enter Parents Last Name"
              required
              className="w-full border border-black rounded-md px-6 py-4 text-xl"
            />
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <label className="block font-medium text-gray-600 text-xl">
              Phone Number
            </label>
            <input
              type="tel"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
              required
              placeholder="e.g., 555-123-4567"
              className="w-full border border-black  rounded-md px-6 py-4 text-xl"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-600 text-xl">
              Email Address
            </label>
            <input
              type="email"
              name="parentEmail"
              value={formData.parentEmail}
              onChange={handleChange}
              required
              placeholder="e.g., parent@example.com"
              className="w-full border border-black  rounded-md px-6 py-4 text-xl"
            />
          </div>
        </div>

        {/* Schedule a Visit */}
        <div>
          <label className="block font-medium text-gray-600 text-xl">
            Schedule a Visit Date
          </label>
          <input
            type="date"
            name="tourDate"
            value={formData.tourDate}
            onChange={(e) => {
              if (isValidDate(e.target.value)) {
                handleChange(e);
              } else {
                alert('Visits are only allowed on weekdays.');
                e.target.value = '';
              }
            }}
            required
            className="w-full border border-black  rounded-md px-6 py-4 text-xl"
          />
        </div>

        {/* Time Selection */}
        <div>
          <label className="block font-medium text-gray-600 text-xl">
            Select a Time Slot
          </label>
          <select
            name="tourTime"
            value={formData.tourTime}
            onChange={handleChange}
            required
            className="w-full border border-black  rounded-md px-6 py-4 text-xl"
          >
            <option value="">-- Select a Time --</option>
            <option value="4:00 PM">4:00 PM</option>
            <option value="4:30 PM">4:30 PM</option>
            <option value="5:00 PM">5:00 PM</option>
            <option value="5:30 PM">5:30 PM</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-terracotta text-white font-bold py-4 text-2xl rounded-lg hover:bg-red-500 hover:pointer hover:scale-105 transition-all"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default ScheduleVisitForm;
