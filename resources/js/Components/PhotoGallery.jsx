import { useState } from "react";
import Slider from "react-slick";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactCompareImage from "react-compare-image";

import before1 from "../../assets/images/gallery/Before-1.avif";
import after1 from "../../assets/images/gallery/After-1.avif";
import before2 from "../../assets/images/gallery/Before-2.avif";
import after2 from "../../assets/images/gallery/After-2.avif";

import styles from "./PhotoGallery.module.css";

const images = [
  { before: before1, after: after1 },
  { before: before2, after: after2 },
];

export default function PhotoGallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  const settings = {
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 3000,
    dots: true,
    swipetoSlide: false,
    swipe: false,
    arrows: true,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 }, // Móviles: 1 imagen por slide
      },
    ],
  };

  return (
    <section className="py-6 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-gray-800">Galería de Trabajos</h2>
      <div className="h-1 w-16 bg-blue-500 mx-auto my-4"></div>

      {/* Carrusel de imágenes */}
      <div className="max-w-4xl mx-auto">
        <Slider {...settings}>
          {images.map((img, index) => (
            <div key={index} className="px-2">
              <div
                className="bg-white shadow-md rounded-lg cursor-pointer"
                onClick={() => {
                  setPhotoIndex(index);
                //   setIsOpen(true);
                }}
              >
                <div className="compare-image-container">
                    <ReactCompareImage
                        leftImage={img.before}
                        rightImage={img.after}
                        sliderPositionPercentage={0.5}
                    />
                    </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Lightbox para ver imágenes en grande */}
      {isOpen && (
        <Lightbox
            open={isOpen}
            close={() => setIsOpen(false)}
            slides={images.map((img) => ({ src: img.after }))}
            index={photoIndex}
            on={{
            viewPrev: () => setPhotoIndex((photoIndex + images.length - 1) % images.length),
            viewNext: () => setPhotoIndex((photoIndex + 1) % images.length),
            }}
        />
        )}

    </section>
  );
}
