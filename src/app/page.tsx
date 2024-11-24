import Image from "next/image";
import Header from "./Header/Header";
import Hero from "./components/Hero";
import AgeGroupRow from "./components/AgeGroupRow";
import Footer from './Footer/Footer';


export default function LandingPage() {
  return (
    <div className="w-full h-full">

      <Hero />
      <AgeGroupRow />
  
    </div>
  );
}
