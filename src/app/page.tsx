import Image from "next/image";
import Header from "./Header/Header";
import Hero from "./components/Hero";
import Footer from './Footer/Footer';


export default function Home() {
  return (
    <div className="w-full h-full">
      <Header />
      <Hero />

      <Footer /> 
    </div>
  );
}
