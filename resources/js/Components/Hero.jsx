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

    const sliders = [
            {
                image: image1,
                title: ` LOREM IPSUM <span className="text-secondary" data-aos="fade-up" data-aos-delay="600">IS</span>`,
                subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
                button_primary:{
                    text: "SERVICES",
                    link: "#"
                },
                button_secondary:{
                    text: "ABOUT US",
                    link: "#"
                }
            },
            {
                image: image2,
                title: "2 LOREM IPSUM",
                subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
            },
            {
                image: image3,
            },
            {
                image: image4,
                title: "SIMPLY",
                subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...",
                button_primary:{
                    text: "SERVICES",
                    link: "#"
                },
                button_secondary:{
                    text: "ABOUT US",
                    link: "#"
                }
            }
    ];

    return (
        <section id="home" className={styles.hero}>
                <Slider {...settings}>
                   { sliders.map((slider, index) => (
                        <div key={index}>
                            <img src={slider.image} className={styles.backgroundImage} alt="background" />
                            <div className={styles.heroContent}>
                                <div className="max-w-6xl mx-auto w-full">
                                    {
                                        // Imagen
                                        slider.title || slider.subtitle || slider.button_primary || slider.button_secondary ? (
                                            <div className="max-w-md bg-white rounded-3xl shadow-lg p-8 mt-10" data-aos="fade-up">
                                            {
                                                // Título
                                                slider.title && (
                                                    <h2 className="text-3xl font-bold text-primary" data-aos="fade-up" data-aos-delay="300" dangerouslySetInnerHTML={{__html: slider.title}}>
                                                    </h2>
                                                )
                                            }
                                            <div className="w-12 h-1 bg-secondary mx-auto mt-2"></div>
                                            {/* Subtítulo */
                                                slider.subtitle && (
                                                    <p className="text-gray-600 text-sm mt-4" data-aos="fade-up" data-aos-delay="1500">
                                                        {slider.subtitle}
                                                    </p>
                                                )
                                            }
                                            <div className="flex justify-center mt-6 space-x-4" data-aos="fade-up" data-aos-delay="2000">
                                                {
                                                    // Botones
                                                    slider.button_primary && (<a href={slider.button_primary.link} className="bg-secondary hover:bg-primary transition duration-300 ease-in-out text-white font-semibold py-2 px-6 rounded-full shadow-lg">
                                                        {slider.button_primary.text}
                                                    </a>)
                                                }
                                                {
                                                    // Botones
                                                    slider.button_secondary && (<a href={slider.button_secondary.link} className="text-gray-500 font-semibold py-2 px-6">
                                                        {slider.button_secondary.text}
                                                    </a>)
                                                }
                                            </div>
                                            <div className="mt-2 text-gray-400 flex justify-center items-center">
                                                <span className="w-12 h-0.5 bg-gray-300"></span>
                                                <span className="ml-2 text-sm">←</span>
                                            </div>
                                        </div>
                                        ) : null

                                    }

                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
        </section>
    );
}
