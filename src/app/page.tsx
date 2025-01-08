import Image from "next/image";
// import Header from "./shared/header/Header";
// import Hero from "./components/LandingPageHero"
// import EnrollSection from "./components/EnrollmentSection"
// import WelcomeSection from "./components/WelcomeSection"
// import VideoSection from './components/VideoSection'
// import Footer from './shared/footer/Footer';
// import OurServices from '../app/components/OurServices';
// import TestimonialSection from "./components/Testimonial";

import Homepage from "./components/Homepage";
import Carousel from "./components/Carousel";
import Collage from "./components/Collage"
import FindUs from "./components/FindUs";

export default function LandingPage() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className=" w-full">
        <Carousel />
        <Homepage />
        <FindUs />
        <Collage />
      </div>
      
    </div>
  );
}
