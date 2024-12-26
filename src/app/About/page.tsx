import React from "react";
import OurStory from '../about/components/OurStory'
import CallToAction from '../about/components/CallToAction';
import VisitUs from '../about/components/VisitOurCenter'

const About: React.FC = () => {
  return (
    <div className="p-6">
      <OurStory />
      <VisitUs />
   
      <CallToAction />
    </div>
  );
};

export default About;
