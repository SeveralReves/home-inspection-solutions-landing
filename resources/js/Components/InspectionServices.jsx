import { ShieldCheck, Home, Factory, Search, Car } from "lucide-react";
import HomeImage from "../../assets/images/sections/Home.jpeg";
import Enterprise from "../../assets/images/sections/Enterprise.jpg";
import Vehicle from "../../assets/images/sections/vehicle.jpg";
import Safety from "../../assets/images/sections/Safety.jpeg";
import Enviroment from "../../assets/images/sections/enviroment.jpg";


const services = [
    {
      title: "Home Inspection",
      description: "Comprehensive evaluation of the structure, electrical, plumbing, and HVAC systems.",
      img: HomeImage, // Imagen fija de casa
      icon: <Home className="text-blue-500 w-12 h-12" />,
    },
    {
      title: "Commercial Inspection",
      description: "Detailed analysis of commercial properties for safety and compliance.",
      img: Enterprise, // Edificio de oficinas
      icon: <Factory className="text-green-500 w-12 h-12" />,
    },
    {
      title: "Safety Inspections",
      description: "Ensure buildings and workplaces meet safety regulations and standards.",
      img: Safety, // Seguridad industrial
      icon: <ShieldCheck className="text-red-500 w-12 h-12" />,
    },
    {
      title: "Vehicle Inspection",
      description: "Comprehensive vehicle checks for mechanical, electrical, and emission standards.",
      img: Vehicle, // Mecánico revisando carro
      icon: <Car className="text-yellow-500 w-12 h-12" />,
    },
    {
      title: "Environmental Inspection",
      description: "Assessment of environmental risks, contamination, and sustainability compliance.",
      img: Enviroment, // Medio ambiente
      icon: <Search className="text-purple-500 w-12 h-12" />,
    },
  ];


export default function InspectionServices() {
  return (
    <div className="max-w-6xl mx-auto my-12 px-6">
      <h2 className="text-4xl font-bold text-gray-800 text-center">Inspection Services</h2>
      <div className="h-1 w-16 bg-blue-500 mx-auto my-4"></div>
      <p className="text-center text-gray-600 mb-10">
        Professional inspection services to ensure safety and compliance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition duration-300">
            <img src={service.img} alt={service.title} className="w-full md:w-1/3 h-56 object-cover" />
            <div className="p-6 flex flex-col justify-center w-full md:w-2/3">
              <div className="flex items-center gap-3 mb-4">
                {service.icon}
                <h3 className="text-2xl font-semibold text-gray-800">{service.title}</h3>
              </div>
              <p className="text-gray-600">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
