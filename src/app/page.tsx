import Image from "next/image";
import Header from "./header/Header";
import Hero from "./components/Hero";
import AgeGroupRow from "./components/AgeGroupRow";
import Footer from './footer/Footer';
import OurServices from '../app/components/OurServices';
import TestimonialSection from "./components/Testimonial";
import HomeBanner from './components/HomeBanner'

export default function LandingPage() {
  return (
    <div className="w-full h-full">
      <HomeBanner />
      <Hero />
      <OurServices />
      <AgeGroupRow />
      <TestimonialSection /> 
    </div>
  );
}
