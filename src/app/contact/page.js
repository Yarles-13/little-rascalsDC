"use client";
import Link from "next/link";
import React, { useState } from "react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: "",
    });
  };

  return (
    <>
      {/* Top Banner */}
      <div className="bg-gray-500 text-white py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">How can we help?</h1>
        <p className="text-lg">Send us a message!</p>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-stretch py-10 px-6 md:px-16 gap-8 bg-gray-50">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col w-full md:w-1/2 bg-white shadow-md p-6 rounded-lg"
        >
          <h2 className="text-2xl font-semibold mb-4 text-gray-800">Send a Message</h2>

          <label htmlFor="name" className="text-sm font-medium text-gray-600">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Your Name"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <label htmlFor="email" className="text-sm font-medium text-gray-600">
            Email Address *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Your Email Address"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <label htmlFor="phone" className="text-sm font-medium text-gray-600">
            Phone Number *
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Your Phone Number"
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
          />

          <label htmlFor="message" className="text-sm font-medium text-gray-600">
            Your Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            placeholder="Type your message here..."
            className="border border-gray-300 rounded-md px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-red-400"
          ></textarea>

          <button
            type="submit"
            className="bg-gray-500 text-white rounded-md py-2 hover:bg-red-500 transition"
          >
            Submit
          </button>
        </form>

        {/* Contact Details with Google Maps */}
        <div className="flex flex-col w-full md:w-1/2 bg-gray-800 text-white shadow-md rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Contact Information</h2>

          <div className="mb-4">
            <h3 className="text-lg font-medium">Address:</h3>
            <p>5240 W 31st Street, Cicero, Illinois 60804</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium">Hours:</h3>
            <p>Monday - Friday: 6AM - 4:30PM</p>
          </div>

          <div className="mb-4">
            <h3 className="text-lg font-medium">Phone:</h3>
            <p>(708) 203-6817</p>
          </div>

          {/* <div className="mb-6">
            <h3 className="text-lg font-semibold">About Us:</h3>
            <p>
              We are passionate about creating an environment where your child
              will thrive. Please use the contact form or call our number to get in
              touch with us today.
            </p>
          </div> */}

          <button
            className="bg-gray-300 text-black font-semibold px-4 py-2 rounded-md hover:bg-green-400 hover:text-gray-800 transition"
          >
            Schedule Tour!
          </button>

          {/* Google Maps Embed */}
          <div className="mt-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.494636269887!2d-87.75130278455644!3d41.830774979228734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e3346e9d858c7%3A0x55a5d501aa5ddbbf!2s5240%20W%2031st%20St%2C%20Cicero%2C%20IL%2060804%2C%20USA!5e0!3m2!1sen!2sin!4v1698793496039!5m2!1sen!2sin"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
