import React from "react";
import OurStory from '../about/components/OurStory'
import OurTeam from '../about/components/OurTeam'
import CallToAction from '../about/components/CallToAction';
import VisitUs from '../about/components/VisitOurCenter'

const About: React.FC = () => {
  return (
    <div className="p-6">
      <OurStory />
      <VisitUs />
      <OurTeam />
      <CallToAction />
    </div>
  );
};

export default About;
