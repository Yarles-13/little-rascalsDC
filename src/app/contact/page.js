"use client"
import Link from "next/link";
import React, { useState } from "react";
import GoogleMap from "./GoogleMapComponent"



const ContactPage = () => {
  const [formData, setFormData] = useState({
    parentName: "",
    parentPhone: "",
    parentEmail: "",
    childName: "",
    childBirthdate: "",
    interest: "",
    startDate: "",
    scheduleTour: "",
    childInfo: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Inquiry sent successfully!");
    setFormData({
      parentName: "",
      parentPhone: "",
      parentEmail: "",
      childName: "",
      childBirthdate: "",
      interest: "",
      startDate: "",
      scheduleTour: "",
      childInfo: "",
    });
  };

  return (
    <>
      {/* Background Video Section */}
      <div className="relative w-full h-[400px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/cafe-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold">Inquire / Schedule a Tour</h1>
        </div>
      </div>

      <div className="py-12 px-6 bg-gray-50 flex justify-center">
        <div className="flex flex-col md:flex-row w-full max-w-7xl md:space-x-8 space-y-8 md:space-y-0">
          <div className="w-full max-w-3xl">
            <form
              onSubmit={handleSubmit}
              className="w-full bg-white shadow-lg rounded-lg p-8"
            >
              <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
                Parent and Child Information
              </h2>

              {/* Parent's Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Parent's Name</label>
                  <input
                    type="text"
                    name="parentName"
                    value={formData.parentName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Parent's Phone</label>
                  <input
                    type="tel"
                    name="parentPhone"
                    value={formData.parentPhone}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-600">Parent's Email</label>
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-red-400"
                />
              </div>

              {/* Child's Information */}
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-600">Child's Name</label>
                  <input
                    type="text"
                    name="childName"
                    value={formData.childName}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600">Child's Birthdate</label>
                  <input
                    type="date"
                    name="childBirthdate"
                    value={formData.childBirthdate}
                    onChange={handleChange}
                    required
                    className="w-full border border-gray-300 rounded-md px-4 py-2"
                  />
                </div>
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-600">Desired Start Date</label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              
              <div className="mt-6">
                <label className="block text-sm font-medium text-gray-600">Care Option</label>
                <select
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                >
                  <option value="">Select an option</option>
                  <option value="full-time">Full-Time</option>
                  <option value="part-time">Part-Time</option>
                  <option value="hourly">Hourly</option>
                </select>
              </div>
              <button className=" mt-3 rounded-md w-full border border-orange bg-">Submit Request </button>
            </form>
          </div>
          <GoogleMap />
        </div>
      </div>
    </>
  );
};

export default ContactPage;