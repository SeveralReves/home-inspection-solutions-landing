import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import image1 from "../../assets/images/sections/c-1.png";
import image2 from "../../assets/images/sections/c-3.png";
import image3 from "../../assets/images/sections/c-5.png";
import image4 from "../../assets/images/sections/c-6.png";
import image5 from "../../assets/images/sections/c-7.png";

const certificates = [
  { title: "Certificado 1", image: image1 },
  { title: "Certificado 2", image: image2 },
  { title: "Certificado 3", image: image3 },
  { title: "Certificado 4", image: image4 },
  { title: "Certificado 5", image: image5 },
];

export default function CertificatesBanner() {
  const settings = {
    infinite: true, // Permite desplazamiento infinito
    speed: 5000, // Velocidad de transición en ms
    slidesToShow: 4, // Muestra 3 certificados a la vez (ajustable)
    slidesToScroll: 1, // Se mueve de uno en uno
    autoplay: true, // Activa el desplazamiento automático
    autoplaySpeed: 0, // Cada 2 segundos cambia de slide
    cssEase: "linear", // Efecto de transición lineal
    arrows: false, // Oculta las flechas de navegación
    dots: false, // Oculta los indicadores
    responsive: [
      {
        breakpoint: 768, // Para móviles
        settings: {
          slidesToShow: 1, // Solo un certificado visible en pantallas pequeñas
        },
      },
      {
        breakpoint: 1024, // Para tablets
        settings: {
          slidesToShow: 2, // Dos certificados visibles en tablets
        },
      },
    ],
  };

  return (
    <section className="py-10 pb-10 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800">Certifications</h2>
      <div className="h-1 w-16 bg-blue-500 mx-auto my-4"></div>
      <div className="max-w-6xl mx-auto mt-10">
        <Slider {...settings}>
          {certificates.map((cert, index) => (
            <div key={index} className="px-2">
              <div className="bg-white shadow-md rounded-lg flex items-center justify-center p-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-32 object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
          {certificates.map((cert, index) => (
            <div key={index} className="px-2">
              <div className="bg-white shadow-md rounded-lg flex items-center justify-center p-4">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-32 object-contain rounded-lg"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
