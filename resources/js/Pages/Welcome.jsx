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
import CertificatesBanner from '../Components/Certificates.jsx';
import PhotoGallery from '../Components/PhotoGallery.jsx';
import LatestPostsSection from '../Components/LatestPostsSection.jsx';
import ScanMe from '../Components/ScanMe.jsx';
import { MessageCircle } from "lucide-react";

export default function Welcome({ auth, laravelVersion, phpVersion, posts }) {
    const title = 'Home Handyman Solutions | Handyman in Valdosta, GA';
    const description = 'Professional handyman services in Valdosta, GA: plumbing, electrical, carpentry, remodeling, fence and siding repairs, and more. Fast, reliable, affordable.';
    const url = 'https://homehandymansolutions.site';
    const image = `${url}/images/logo.jpg`; // súbela en public/images/preview.jpg (1200x630)

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Home Handyman Solutions",
        "image": image,
        "url": url,
        "telephone": "+1-229-660-4209",
        "address": {
        "@type": "PostalAddress",
        "streetAddress": "3894 Stratford Cir",
        "addressLocality": "Valdosta",
        "addressRegion": "GA",
        "postalCode": "31605",
        "addressCountry": "US"
        },
        "areaServed": "Valdosta, GA",
        "priceRange": "$$",
        "sameAs": [
        ],
        "description": description
    };
    
    return (
        <>
            <Head>
                {/* Title + Description */}
                <title>{title}</title>
                <meta name="description" content={description} />

                {/* Canonical */}
                <link rel="canonical" href={url} />

                {/* Open Graph */}
                <meta property="og:site_name" content="Home Handyman Solutions" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:image" content={image} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
                <meta name="twitter:image" content={image} />

                {/* Opcional: idioma/robots */}
                <meta httpEquiv="content-language" content="en-US" />
                <meta name="robots" content="index,follow" />

                {/* JSON-LD */}
                <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
                </script>
            </Head>
            <Header posts={posts}/>
            <Hero />
            <GoogleReviews />
            <HandymanServices />
            <PhotoGallery />
            {posts?.length > 0 && (
                <LatestPostsSection posts={posts}/>
            )}
            <CertificatesBanner />
            <AboutUs />
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
