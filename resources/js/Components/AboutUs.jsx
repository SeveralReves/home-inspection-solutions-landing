import image from "../../assets/images/sections/about.png";

export default function AboutUs() {
    return (
        <section
            className={`w-full transition-all duration-300 ease-in-out z-50 text-black py-10 bg-white shadow-lg`}
        >
            <div className="container--small flex flex-col items-center">
                <div className="max-w-md bg-white m-auto">
                    <h3 className="text-3xl font-bold text-primary"  data-aos="fade-up">
                        ABOUT <span className="text-secondary">US</span>
                    </h3>
                    <div className="w-12 h-1 bg-secondary mx-auto mt-2"  data-aos="fade-up"></div>
                </div>
                <div className="flex justify-between w-full gap-12 mt-12"  data-aos="fade-up">
                    <div className="max-w-md">
                        <p className="text-gray-600 text-sm">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </p>
                        <button className="bg-secondary hover:bg-primary transition duration-300 ease-in-out text-white font-semibold py-2 px-6 mt-5 rounded-full shadow-lg">
                            SERVICES
                        </button>
                    </div>
                    <img src={image} alt="image about us" className="flex rounded-3xl overflow-hidden shadow-lg"/>
                </div>
            </div>
        </section>
    );
}
