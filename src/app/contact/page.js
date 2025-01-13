"use client";
import React, { useState } from "react";
import FAQSection from "./forms/FAQ";
import Gallery from "../enroll/Gallery"
import ScheduleVisit from "./forms/ScheduleVisit"

const ContactPage = () => {


  return (
    <>
 

      <div className="bg-[#d9d3c9] py-16 px-40 flex flex-col items-center justify-center  space-y-12"
        >


        <ScheduleVisit />
        <Gallery />
      </div>
    </>
  );
};

export default ContactPage;
