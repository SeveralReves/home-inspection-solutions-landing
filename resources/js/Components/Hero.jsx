import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/images/hero/Hero-1.avif";
import image2 from "../../assets/images/hero/Hero-2.avif";
import image3 from "../../assets/images/hero/Hero-3.avif";
import image4 from "../../assets/images/hero/Hero-4.avif";
import styles from "./Hero.module.css";

// Importar el estilo de slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
    const settings = {
        dots: true, // Mostrar puntos de navegación
        infinite: true, // Hacer el slider infinito
        speed: 500, // Velocidad de transición
        slidesToShow: 1, // Mostrar un solo slide a la vez
        slidesToScroll: 1, // Desplazar un slide por vez
        autoplay: true, // Habilitar autoplay
        autoplaySpeed: 5000, // Velocidad de autoplay (3 segundos)
        arrows: false, // Ocultar las flechas
        fade: true
    };

    return (
        <section className={styles.hero}>
                <Slider {...settings}>
                    <div>
                        <img src={image1} className={styles.backgroundImage} alt="background" />
                    </div>
                    <div>
                        <img src={image2} className={styles.backgroundImage} alt="background" />
                    </div>
                    <div>
                        <img src={image3} className={styles.backgroundImage} alt="background" />
                    </div>
                    <div>
                        <img src={image4} className={styles.backgroundImage} alt="background" />
                    </div>
                </Slider>
                <div className={styles.heroContent}>
                    <div className="max-w-6xl mx-auto w-full">
                    <div className="max-w-md bg-white rounded-3xl shadow-lg p-8 mt-10" data-aos="fade-up">
                        <h2 className="text-3xl font-bold text-primary" data-aos="fade-up" data-aos-delay="300">
                            LOREM IPSUM <span className="text-secondary" data-aos="fade-up" data-aos-delay="600">IS</span>
                        </h2>
                        <h2 className="text-3xl font-bold text-primary mt-1" data-aos="fade-up" data-aos-delay="900">
                            SIMPLY
                        </h2>
                        <div className="w-12 h-1 bg-secondary mx-auto mt-2"></div>
                        <p className="text-gray-600 text-sm mt-4" data-aos="fade-up" data-aos-delay="1500">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...
                        </p>
                        <div className="flex justify-center mt-6 space-x-4" data-aos="fade-up" data-aos-delay="2000">
                            <button className="bg-secondary hover:bg-primary transition duration-300 ease-in-out text-white font-semibold py-2 px-6 rounded-full shadow-lg">
                                SERVICES
                            </button>
                            <button className="text-gray-500 font-semibold py-2 px-6">
                                ABOUT US
                            </button>
                        </div>
                        <div className="mt-2 text-gray-400 flex justify-center items-center">
                            <span className="w-12 h-0.5 bg-gray-300"></span>
                            <span className="ml-2 text-sm">←</span>
                        </div>
                    </div>

                    </div>

                </div>
        </section>
    );
}
