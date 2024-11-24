import Image from "next/image";
import Header from "./header/Header";
import Hero from "./components/Hero";
import AgeGroupRow from "./components/AgeGroupRow";
import Footer from './footer/Footer';
import OurServices from '../app/components/OurServices';
import TestimonialSection from "./components/Testimonial";

export default function LandingPage() {
  return (
    <div className="w-full h-full">
      <Hero />
      <OurServices />
      <AgeGroupRow />
      <TestimonialSection /> 
    </div>
  );
}
