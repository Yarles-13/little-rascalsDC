
import Homepage from "./components/Homepage";
import Carousel from "./components/Carousel";
import Collage from "./components/Collage"
import FindUs from "./components/FindUs";
import Testimonial from "./components/Testimonial";




export default function LandingPage() {
  return (
    <div className="w-full h-full ">
      <div className=" w-full">
        <Carousel />
        <Homepage />
        <Collage />
        <FindUs />
        <Testimonial />
      </div>
    </div>
  );
}
