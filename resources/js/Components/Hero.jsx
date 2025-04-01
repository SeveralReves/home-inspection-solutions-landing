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
            title: `Reliable Handyman Services <span className="text-secondary">Near You!</span>`,
            subtitle: "From plumbing and electrical work to carpentry and painting, we offer top-quality handyman services. Fast, affordable, and reliable repairs for your home or rental property.",
            button_primary: { text: "Get a Free Quote", link: "#contact" },
            button_secondary: { text: "View Our Services", link: "#handyman" }
        },
        {
            desktopImage: image2,
            mobileImage: mobileImage2,
            title: "Expert Door & Window Repairs - Fast & Affordable!",
            subtitle: "Don’t let broken doors or drafty windows increase your energy bills! Our handyman experts fix, replace, and install doors and windows for a secure and comfortable home.",
            button_primary: { text: "Contact Us Now", link: "#contact" },
        },
        {
            desktopImage: image3,
            mobileImage: mobileImage3,
            title: "Transform Your Space - Painting & Carpentry Services!",
            subtitle: "Upgrade your home with professional painting and carpentry. Whether it’s a fresh coat of paint or custom woodwork, our handyman services will bring your vision to life.",
            button_secondary: { text: "See Our Work", link: "#gallery" },
        },
        {
            desktopImage: image4,
            mobileImage: mobileImage4,
            title: "Certified Home Inspections Near You!",
            subtitle: "Buying or selling a home? Our professional home inspectors provide detailed reports to ensure your property is safe and up to code. Book your inspection today!",
            button_primary: { text: "Schedule Inspection", link: "#contact" },
            button_secondary: { text: "Learn About Inspections", link: "#inspections" }
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
                                            React.createElement(
                                                index === 0 ? 'h1' : 'h2',
                                                {
                                                    className: "text-3xl font-bold text-primary text-center",
                                                    "data-aos": "fade-up",
                                                    dangerouslySetInnerHTML: { __html: slider.title }
                                                }
                                            )
                                        )}
                                        <div className="w-12 h-1 bg-secondary mx-auto mt-2"></div>
                                        {slider.subtitle && (
                                            <p className="text-gray-600 text-sm mt-4" data-aos="fade-up">
                                                {slider.subtitle}
                                            </p>
                                        )}
                                        <div className="flex justify-center mt-6 space-x-4" data-aos="fade-up">
                                            {slider.button_primary && (
                                                <a href={slider.button_primary.link} className="bg-secondary hover:bg-primary transition text-center duration-300 ease-in-out text-white font-semibold py-2 px-6 rounded-full shadow-lg">
                                                    {slider.button_primary.text}
                                                </a>
                                            )}
                                            {slider.button_secondary && (
                                                <a href={slider.button_secondary.link} className="text-gray-500 text-center font-semibold py-2 px-6">
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
