"use client";
import React from "react";

const ForParentsRemaining = () => {
  return (
    <div className=" min-h-screen p-6 sm:p-12">
    

      {/* Drop-Off and Pick-Up Section */}
      <section className="bg-white shadow-md rounded-lg p-10 mb-12">
        <h2 className="text-4xl font-bold text-terracotta mb-8 text-center">
          Drop-Off and Pick-Up Procedures
        </h2>

        <div className="text-lg text-gray-800 space-y-6 leading-relaxed">
          <p>
            Drop-off takes place at <strong>8:00 AM sharp</strong>. This ensures all children
            can participate in the full day’s activities without disruption.  
          </p>
          <p>
            Pick-up begins at <strong>3:30 PM</strong>, with children returning home by 
            <strong> 4:00 PM</strong>. Parents are expected to pick up their child no later than 
            <strong> 4:30 PM</strong>.
          </p>
          <p>
            On most days, we walk to and from school, allowing children to enjoy fresh air
            and light exercise. In cases of bad weather or necessity, we drive them to 
            and from school.
          </p>
          <p>
            **Late Pick-Ups:** If a parent is running late, please notify us as soon as 
            possible. Consistent late pick-ups may result in additional fees.
          </p>
        </div>
      </section>

      {/* Meals and Nutrition Section */}
      <section className="bg-white shadow-md rounded-lg p-8 mb-12">
        <h2 className="text-4xl font-bold text-cactusGreen mb-8 text-center">
          Meals and Nutrition
        </h2>

        <div className="text-lg text-gray-800 space-y-6 leading-relaxed">
          <p>
            At Little Rascals Daycare, we believe in providing healthy, homemade meals 
            rooted in our cultural heritage. Our meals are made with love and are always 
            nutritious and balanced.
          </p>
          <p>
            <strong>Breakfast:</strong> Every morning, children are served a healthy breakfast 
            to start their day with energy and focus.
          </p>
          <p>
            <strong>Lunch:</strong> We prepare traditional Mexican dishes that are always
            <strong> non-spicy</strong>, ensuring the meals are child-friendly and easy to 
            digest. We emphasize home-cooked flavors, fresh ingredients, and meals 
            that children look forward to.
          </p>
          <p>
            <strong>Snacks:</strong> Healthy, nut-free snacks are provided mid-morning and 
            in the afternoon.
          </p>
          <p>
            If your child has any dietary restrictions or allergies, please inform us in 
            advance so we can accommodate their needs.
          </p>
        </div>
      </section>

      
    </div>
  );
};

export default  ForParentsRemaining;
