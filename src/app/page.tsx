import Image from "next/image";
import Homepage from "./components/Homepage";
import Carousel from "./components/Carousel";
import Collage from "./components/Collage"
import FindUs from "./components/FindUs";
import Banner from "./shared/header/HomeBanner";
import Testimonial from "./components/Testimonial";
import ShowcaseHouse from "./components/ShowcaseHouse"


export default function LandingPage() {
  return (
    <div className="w-full h-full ">
      <div className=" w-full">
        
        <Carousel />
        <Homepage />
        <Banner />
        <FindUs />
        <Collage />
        <Testimonial />
        <ShowcaseHouse />
      </div>
      
    </div>
  );
}
