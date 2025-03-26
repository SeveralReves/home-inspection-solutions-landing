import React from "react";
import Slider from "react-slick";
import image1 from "../../assets/images/hero/Hero-5.avif";
import image2 from "../../assets/images/hero/Hero-6.avif";
import image3 from "../../assets/images/hero/Hero-7.avif";
import image4 from "../../assets/images/hero/Hero-8.avif";
import mobileImage1 from "../../assets/images/hero/Hero-5-mobile.avif";
import mobileImage2 from "../../assets/images/hero/Hero-6-mobile.avif";
import mobileImage3 from "../../assets/images/hero/Hero-7-mobile.avif";
import mobileImage4 from "../../assets/images/hero/Hero-8-mobile.avif";
import styles from "./Hero.module.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Hero() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        fade: true
    };

    const sliders = [
        {
            desktopImage: image1,
            mobileImage: mobileImage1,
            title: `LOREM IPSUM <span className="text-secondary">IS</span>`,
            subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            button_primary: { text: "SERVICES", link: "#" },
            button_secondary: { text: "ABOUT US", link: "#" }
        },
        {
            desktopImage: image2,
            mobileImage: mobileImage2,
            title: "2 LOREM IPSUM",
            subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry..."
        },
        {
            desktopImage: image3,
            mobileImage: mobileImage3,
        },
        {
            desktopImage: image4,
            mobileImage: mobileImage4,
            title: "SIMPLY",
            subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry...",
            button_primary: { text: "SERVICES", link: "#" },
            button_secondary: { text: "ABOUT US", link: "#" }
        }
    ];

    return (
        <section id="home" className={styles.hero}>
            <Slider {...settings}>
                {sliders.map((slider, index) => (
                    <div key={index}>
                        <picture>
                            {
                                slider?.mobileImage && (
                                    <source srcSet={slider.mobileImage} media="(max-width: 768px)" />
                                )
                            }
                            <img src={slider.desktopImage} className={styles.backgroundImage} alt="background" />
                        </picture>
                        <div className={styles.heroContent}>
                            <div className="max-w-6xl mx-auto w-full">
                                {slider.title || slider.subtitle || slider.button_primary || slider.button_secondary ? (
                                    <div className="max-w-md bg-white rounded-3xl shadow-lg p-8 mt-10 mx-3" data-aos="fade-up">
                                        {slider.title && (
                                            <h2 className="text-3xl font-bold text-primary" data-aos="fade-up" dangerouslySetInnerHTML={{ __html: slider.title }}></h2>
                                        )}
                                        <div className="w-12 h-1 bg-secondary mx-auto mt-2"></div>
                                        {slider.subtitle && (
                                            <p className="text-gray-600 text-sm mt-4" data-aos="fade-up">
                                                {slider.subtitle}
                                            </p>
                                        )}
                                        <div className="flex justify-center mt-6 space-x-4" data-aos="fade-up">
                                            {slider.button_primary && (
                                                <a href={slider.button_primary.link} className="bg-secondary hover:bg-primary transition duration-300 ease-in-out text-white font-semibold py-2 px-6 rounded-full shadow-lg">
                                                    {slider.button_primary.text}
                                                </a>
                                            )}
                                            {slider.button_secondary && (
                                                <a href={slider.button_secondary.link} className="text-gray-500 font-semibold py-2 px-6">
                                                    {slider.button_secondary.text}
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </section>
    );
}
