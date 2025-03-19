import { Link, Head } from '@inertiajs/react';
import Header from '../Components/Header';
import Hero from '../Components/Hero';
import AboutUs from '../Components/AboutUs';
import Footer from '../Components/Footer';
import GoogleReviews from '../Components/GoogleReviews';
import GoogleReviews2 from '../Components/GoogleReviews2';
import Faq from '../Components/Faq';
import Contact from '../Components/Contact';
import HandymanServices from '../Components/HandymanServices';
import InspectionServices from '../Components/InspectionServices';
import CertificatesBanner from '../Components/Certificates.jsx';
import PhotoGallery from '../Components/PhotoGallery.jsx';
import ScanMe from '../Components/ScanMe.jsx';
import { MessageCircle } from "lucide-react";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head />
            <Header />
            <Hero />
            <GoogleReviews />
            <HandymanServices />
            <CertificatesBanner />
            <InspectionServices />
            <AboutUs />
            <PhotoGallery />
            <GoogleReviews2 />
            <Faq />
            <Contact />
            <ScanMe />
            <Footer />
            <a
                href="#contact"
                className="fixed bottom-6 right-6 bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
            >
                <MessageCircle className="w-6 h-6" />
            </a>
            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
