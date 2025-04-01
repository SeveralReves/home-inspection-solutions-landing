import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Home } from "lucide-react";
import image1 from "../../assets/images/sections/Inspections-3-3.jpg";
import image2 from "../../assets/images/sections/Inspections-2-2.jpg";
import image3 from "../../assets/images/sections/Inspections-1-1.jpg";

const images = [image1, image2, image3];

export default function InspectionServices() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    cssEase: "linear",
  };

  return (
    <div id="inspections" className="max-w-6xl mx-auto my-32 px-6">
      <h2 className="text-4xl font-bold text-gray-800 text-center">Inspection Services</h2>
      <div className="h-1 w-16 bg-blue-500 mx-auto my-4"></div>
      <p className="max-w-3xl mx-auto text-center text-gray-600 mb-10">We focus on delivering accurate and reliable inspections to give you peace of mind and help you make informed decisions about your property in Valdosta, GA.
      </p>

      <div className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
        <div className="w-full md:w-1/2">
          <Slider {...settings}>
            {images.map((img, index) => (
              <img key={index} src={img} alt={`Slide ${index + 1}`} className="w-full h-64 object-cover" />
            ))}
          </Slider>
        </div>
        <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
          <div className="flex items-center gap-3 mb-4">
            <Home className="text-blue-500 w-12 h-12" />
            <h3 className="text-2xl font-semibold text-gray-800">Home Inspection</h3>
          </div>
          <p className="text-gray-600">
          Ensure the safety and compliance of your property with our professional inspection services in Valdosta. Whether you're buying, selling, or need a thorough assessment of your current home, our certified home inspectors provide detailed reports covering all critical aspects. 
          </p>
        </div>
      </div>
    </div>
  );
}
