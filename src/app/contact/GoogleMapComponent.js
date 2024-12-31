"use client"
import Link from "next/link";
import React, { useState } from "react";

const GoogleMapComponent = () => {
  return (
    <div className="w-full  bg-white shadow-lg rounded-lg p-8">
      <h2 className="text-3xl font-semibold text-gray-800  text-center">
        Little Rascals Daycare
      </h2>
   
      <div className="mb-6">
        <h3 className="text-2xl font-medium font-bold">Address</h3>
        <p>5240 W 31st Street, Cicero, Illinois 60804</p>
      </div>
      <div className="mb-6">
        <h3 className="text-2xl font-medium font-bold">Hours</h3>
        <p>Monday - Friday: 6 AM - 4:30 PM</p>
      </div>
      <div className="w-full h-64 rounded-lg overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2965.494636269887!2d-87.75130278455644!3d41.830774979228734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e3346e9d858c7%3A0x55a5d501aa5ddbbf!2s5240%20W%2031st%20St%2C%20Cicero%2C%20IL%2060804%2C%20USA!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        ></iframe>
      </div>
    </div>
  );
};

export default GoogleMapComponent