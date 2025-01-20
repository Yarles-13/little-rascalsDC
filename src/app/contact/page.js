"use client";
import React from "react";
import Gallery from "../enroll/Gallery"
import ScheduleVisit from "./forms/ScheduleVisit"

const ContactPage = () => {


  return (
    <>
 

      <div className="bg-[#f8fbf4] py-16 px-10 flex flex-col items-center justify-center  space-y-12"
        >


        <ScheduleVisit />
        <Gallery />
      </div>
    </>
  );
};

export default ContactPage;
