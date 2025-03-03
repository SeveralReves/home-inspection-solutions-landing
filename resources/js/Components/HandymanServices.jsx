import { Wrench, Hammer, PaintRoller, Plug, Droplet } from "lucide-react";
import Plumbing from "../../assets/images/sections/Plumbing.jpg";
import Electrical from "../../assets/images/sections/Electrical.jpg";
import Painting from "../../assets/images/sections/Painting.jpg";
import Carpentry from "../../assets/images/sections/Carpentry.jpg";
import Repairs from "../../assets/images/sections/Repairs.jpg";

const services = [
    {
      title: "Plumbing Repairs",
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
  ];


export default function HandymanServices() {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6">
      <h2 className="text-4xl font-bold text-gray-800 text-center">Handyman Services</h2>
      <div className="h-1 w-16 bg-blue-500 mx-auto my-4"></div>
      <p className="text-center text-gray-600 mb-10">
        Reliable and professional home improvement services.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {services.map((service, index) => (
          <div key={index} className="basis-[31%] bg-white rounded-3xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
            <img src={service.img} alt={service.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <div className="flex items-center gap-2 mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
