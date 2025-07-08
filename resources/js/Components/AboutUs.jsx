import image from "../../assets/images/sections/about-us-2.jpg";

export default function AboutUs() {
    return (
        <section
            id="about"
            className={`w-full transition-all duration-300 ease-in-out z-50 text-black py-10 bg-white shadow-lg`}
        >
            <div className="container--small flex flex-col items-center">
                <div className="max-w-md bg-white m-auto">
                    <h3 className="text-3xl font-bold text-primary" data-aos="fade-up">
                         <span className="text-secondary">About Us:</span>Your Trusted Partner for Home Maintenance and Inspections in Valdosta, GA
                    </h3>
                    <div className="w-12 h-1 bg-secondary mx-auto mt-2"  data-aos="fade-up"></div>
                </div>
                <div className="flex justify-between w-full flex-col md:flex-row gap-12 mt-12"  data-aos="fade-up">
                    <div className="max-w-md flex flex-col gap-4 items-start">
                        <p className="text-gray-600 text-sm">
                            Welcome to Home Inspections & Solutions, where experience meets dedication to provide you with comprehensive home services in Valdosta, GA, and the surrounding areas. With a solid foundation built on over a decade of experience in the construction industry, we understand the intricacies of residential properties and are committed to ensuring your peace of mind, whether you're a homeowner, buyer, or seller.
                        </p>
                        <p className="text-gray-600 text-sm">
                            At Home Inspections & Solutions, we pride ourselves on delivering reliable, high-quality workmanship and a strong commitment to customer satisfaction. We understand the value of a well-maintained and comfortable home, and we are dedicated to making your life easier. <strong>We are licensed and insured</strong>, so you can feel confident knowing your property is in trusted hands.
                        </p>
                        <p className="text-gray-600 text-sm">
                            Contact Home Inspections & Solutions today for all your home inspection and handyman needs. Let us help you ensure the safety, comfort, and value of your property.
                        </p>
                        <a href="#contact" className="bg-secondary hover:bg-primary transition duration-300 ease-in-out text-white font-semibold py-2 px-6 mt-5 flex  rounded-full shadow-lg">
                            Get a Quote
                        </a>
                    </div>
                    <img src={image} alt="image about us" className="flex rounded-3xl overflow-hidden shadow-lg object-cover"/>
                </div>
            </div>
        </section>
    );
}
