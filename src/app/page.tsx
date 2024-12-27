import Image from "next/image";
import Header from "./shared/header/Header";
import Hero from "./components/LandingPageHero"
import EnrollSection from "./components/EnrollmentSection"
import WelcomeSection from "./components/WelcomeSection"
import VideoSection from './components/VideoSection'
import Footer from './shared/footer/Footer';
import OurServices from '../app/components/OurServices';
// import TestimonialSection from "./components/Testimonial";

export default function LandingPage() {
  return (
    <div className="w-full h-full">
      <Hero />
      <WelcomeSection />
      <EnrollSection />
      <VideoSection />
    </div>
  );
}
