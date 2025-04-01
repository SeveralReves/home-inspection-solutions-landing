import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  Wrench,
  Hammer,
  PaintRoller,
  Plug,
  Droplet,
  Home,
  Trash2,
  Shield,
  Tv,
  Layers,
  DoorOpen
} from "lucide-react";

import Plumbing from "../../assets/images/sections/Plumbing.jpg";
import Electrical from "../../assets/images/sections/Electrical.jpg";
import Painting from "../../assets/images/sections/Painting.jpg";
import Carpentry from "../../assets/images/sections/Carpentry-2.jpg";
import Repairs from "../../assets/images/sections/Repairs-2.jpg";
import Remodeling from "../../assets/images/sections/remodeling.jpg";
import JunkRemoval from "../../assets/images/sections/junkremoval.jpg";
import FenceRepairs from "../../assets/images/sections/fencerepairs-2.webp";
import ApplianceInstallation from "../../assets/images/sections/applianceinstallation-2.jpg";
import SidingRepairs from "../../assets/images/sections/sidingrepairs.jpg";
import DoorsWindows from "../../assets/images/sections/doorswindows-2.jpg";

const services = [
  {
    title: "Small Plumbing Repairs",
    description: "Fixing leaks, pipe replacements, and plumbing maintenance.",
    img: Plumbing,
    icon: <Droplet className="text-blue-500 w-10 h-10" />,
  },
  {
    title: "Electrical Services",
    description: "Wiring, lighting installation, and electrical troubleshooting.",
    img: Electrical,
    icon: <Plug className="text-yellow-500 w-10 h-10" />,
  },
  {
    title: "Painting & Finishing",
    description: "Professional painting and wall finishing services.",
    img: Painting,
    icon: <PaintRoller className="text-green-500 w-10 h-10" />,
  },
  {
    title: "Carpentry & Woodwork",
    description: "Custom furniture, repairs, and woodworking projects.",
    img: Carpentry,
    icon: <Hammer className="text-brown-500 w-10 h-10" />,
  },
  {
    title: "General Repairs",
    description: "All types of home and office repairs.",
    img: Repairs,
    icon: <Wrench className="text-gray-500 w-10 h-10" />,
  },
  {
    title: "Remodeling",
    description: "Complete home and office remodeling services.",
    img: Remodeling,
    icon: <Home className="text-orange-500 w-10 h-10" />,
  },
  {
    title: "Junk Removal",
    description: "Efficient removal of unwanted items and debris.",
    img: JunkRemoval,
    icon: <Trash2 className="text-red-500 w-10 h-10" />,
  },
  {
    title: "Fence Repairs",
    description: "Fixing and maintaining fences for homes and businesses.",
    img: FenceRepairs,
    icon: <Shield className="text-green-600 w-10 h-10" />,
  },
  {
    title: "Appliance Installation & Removal",
    description: "Installing and removing household appliances safely.",
    img: ApplianceInstallation,
    icon: <Tv className="text-blue-700 w-10 h-10" />,
  },
  {
    title: "Siding Repairs",
    description: "Repair and maintenance of house siding.",
    img: SidingRepairs,
    icon: <Layers className="text-gray-700 w-10 h-10" />,
  },
  {
    title: "Doors & Windows Installation",
    description: "Installation of doors and windows for better security and aesthetics.",
    img: DoorsWindows,
    icon: <DoorOpen className="text-indigo-500 w-10 h-10" />,
  },
];

export default function HandymanServices() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div id="handyman" className="max-w-6xl mx-auto my-12 px-6">
      <h2 className="text-4xl font-bold text-gray-800 text-center">Handyman Services</h2>
      <div className="h-1 w-16 bg-blue-500 mx-auto my-4"></div>
      <p className="max-w-3xl mx-auto text-center text-gray-600 mb-10">
        Serving Valdosta, GA, we offer top-quality handyman services to ensure your home is safe, functional, and looking its best.  From small fixes to larger home improvement projects, trust us for expert handyman solutions.
      </p>

      {/* Para Desktop */}
      <div className="hidden md:flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="basis-[31%] bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300"
          >
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Para Mobile (Slick Slider) */}
      <div className="md:hidden">
        <Slider {...sliderSettings}>
          {services.map((service, index) => (
            <div key={index} className="p-4 mb-5">
              <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
                <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
                  <p className="text-gray-600 mt-2">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
