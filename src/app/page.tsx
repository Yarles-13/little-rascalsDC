import Image from "next/image";
import Header from "./shared/header/Header";
import Hero from "./components/LandingPageHero"
import Footer from './shared/footer/Footer';
import OurServices from '../app/components/OurServices';
// import TestimonialSection from "./components/Testimonial";
import HomeBanner from './components/HomeBanner'

export default function LandingPage() {
  return (
    <div className="w-full h-full">
      <Hero />
      {/* <HomeBanner />
   
      <OurServices /> */}
 
      {/* <TestimonialSection />  */}
    </div>
  );
}
