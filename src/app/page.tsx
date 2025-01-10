import Image from "next/image";
import Homepage from "./components/Homepage";
import Carousel from "./components/Carousel";
import Collage from "./components/Collage"
import FindUs from "./components/FindUs";
import Banner from "./shared/header/HomeBanner"


export default function LandingPage() {
  return (
    <div className="w-full h-full flex justify-center">
      <div className=" w-full">
        
        <Carousel />
        <Homepage />
        <Banner />
        <FindUs />
        <Collage />
      </div>
      
    </div>
  );
}
