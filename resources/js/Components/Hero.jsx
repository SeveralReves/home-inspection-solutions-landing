import bg from "../../assets/images/bg/Hero.png";
import image from "../../assets/images/sections/Handyman-1.png";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={`${styles.hero} container flex items-center`}>
            <div className="max-w-md  bg-white rounded-3xl shadow-lg p-8 " data-aos="fade-up">
                <h2 className="text-3xl font-bold text-primary"  data-aos="fade-up" data-aos-delay="300">
                    LOREM IPSUM <span className="text-secondary"  data-aos="fade-up" data-aos-delay="600">IS</span>
                </h2>
                <h2 className="text-3xl font-bold text-primary mt-1" data-aos="fade-up" data-aos-delay="900">SIMPLY</h2>
                <div className="w-12 h-1 bg-secondary mx-auto mt-2"></div>
                <p className="text-gray-600 text-sm mt-4" data-aos="fade-up" data-aos-delay="1500">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry’s
                    standard dummy text ever since the 1500s...
                </p>
                <div className="flex justify-center mt-6 space-x-4"  data-aos="fade-up" data-aos-delay="2000">
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
            <img src={bg} className={styles.backgroundImage} alt="background"  data-aos="fade-up" data-aos-delay="1500" />
            <img src={image} alt="Handyman 1" className={styles.imageAb}  data-aos="fade-up" data-aos-delay="1500" />
        </section>
    );
}
