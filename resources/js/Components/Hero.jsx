import bg from "../../assets/images/bg/Hero.png";
import image from "../../assets/images/sections/Handyman-1.png";
import styles from "./Hero.module.css";

export default function Hero() {
    return (
        <section className={`${styles.hero} container`}>

           <div className="max-w-md  bg-white rounded-3xl shadow-lg p-8 ">
            <h2 className="text-3xl font-bold text-black">
                LOREM IPSUM <span className="text-teal-400">IS</span>
            </h2>
            <h2 className="text-3xl font-bold text-black mt-1">SIMPLY</h2>
            <div className="w-12 h-1 bg-teal-400 mx-auto mt-2"></div>
            <p className="text-gray-600 text-sm mt-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s...
            </p>
            <div className="flex justify-center mt-6 space-x-4">
                <button className="bg-teal-400 text-white font-semibold py-2 px-6 rounded-full shadow-lg">
                    SERVICES
                </button>
                <button className="text-gray-400 font-semibold py-2 px-6">
                    ABOUT US
                </button>
            </div>
            <div className="mt-2 text-gray-400 flex justify-center items-center">
                <span className="w-12 h-0.5 bg-gray-300"></span>
                <span className="ml-2 text-sm">←</span>
            </div>
        </div>
            <img src={bg} className={styles.backgroundImage} alt="background" />
            <img src={image} alt="Handyman 1" className={styles.imageAb} />
        </section>
    );
}
