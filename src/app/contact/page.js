"use client";
import React, { useState } from "react";
import FAQSection from "../contact/forms/FAQ";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    parentFirstName: "",
    parentMiddleName: "",
    parentLastName: "",
    parentPhone: "",
    parentEmail: "",
    childFirstName: "",
    childMiddleName: "",
    childLastName: "",
    childBirthdate: "",
    interest: "",
    startDate: "",
    scheduleTour: "",
    tourDate: "",
    tourTime: "",
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
      parentFirstName: "",
      parentMiddleName: "",
      parentLastName: "",
      parentPhone: "",
      parentEmail: "",
      childFirstName: "",
      childMiddleName: "",
      childLastName: "",
      childBirthdate: "",
      interest: "",
      startDate: "",
      scheduleTour: "",
      tourDate: "",
      tourTime: "",
      childInfo: "",
    });
  };

  return (
    <>
      {/* Background Video Section */}
      <div className="relative w-full mt-20 h-[400px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          className="absolute w-full h-full object-cover"
        >
          <source src="/assets/cafe-video.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-white">
          <h1 className="text-5xl font-bold">Schedule a Tour</h1>
          
        </div>
      </div>

      {/* Form and FAQ Section */}
      <div className="py-16 px-6 bg-gray-50 flex flex-col items-center justify-center min-h-screen space-y-12">
      <h1 className="text-3xl font-bold text-center">Pick a date and schedule a visit! </h1>
        
        {/* Form Section */}
        <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg p-8">
          
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
              Parent Information
            </h2>
            

            {/* Parent's Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Parent's First Name
                </label>
                <input
                  type="text"
                  name="parentFirstName"
                  value={formData.parentFirstName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Middle Name (Optional)
                </label>
                <input
                  type="text"
                  name="parentMiddleName"
                  value={formData.parentMiddleName}
                  onChange={handleChange}
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Parent's Last Name
                </label>
                <input
                  type="text"
                  name="parentLastName"
                  value={formData.parentLastName}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="parentPhone"
                  value={formData.parentPhone}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600">
                  Email
                </label>
                <input
                  type="email"
                  name="parentEmail"
                  value={formData.parentEmail}
                  onChange={handleChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-4 py-2"
                />
              </div>
            </div>

            {/* Schedule a Visit */}
            <div className="mt-8">
              <label className="block text-sm font-medium text-gray-600">
                Schedule a Visit Date
              </label>
              <input
                type="date"
                name="tourDate"
                value={formData.tourDate}
                onChange={handleChange}
                required
                className="w-full border border-gray-300 rounded-md px-4 py-2"
              />
            </div>

            <button
              type="submit"
              className="mt-8 w-full bg-red-500 text-white font-bold py-3 rounded-lg hover:bg-red-600 transition-all"
            >
              Submit Request
            </button>
          </form>
        </div>

        {/* FAQ Section */}
        <div className="w-full max-w-3xl">
          <FAQSection />
        </div>
      </div>
    </>
  );
};

export default ContactPage;
