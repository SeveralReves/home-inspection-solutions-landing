import { Head } from '@inertiajs/react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import LatestPostsSection from '../../Components/LatestPostsSection.jsx';
import { Link } from '@inertiajs/react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Show({ post, posts }) {
    return (
        <>
            <Head title={post.title} />
            <Header />
            <section className="bg-primary text-white py-12 mt-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
                    <p className="text-sm opacity-80 mb-6">
                        {new Date(post.created_at).toLocaleDateString()}
                    </p>
                    <Link
                        href="/"
                        className="inline-block bg-white text-primary font-semibold px-6 py-2 rounded-full shadow hover:bg-gray-100 transition"
                    >
                        ← Back to Home
                    </Link>
                </div>
            </section>

            {/* Bloques de contenido */}
            <section className="py-12 px-4 max-w-4xl mx-auto">
                {Array.isArray(post.content) && post.content?.map((block, index) => {
                    switch (block.type) {
                        case 'title':
                            return (
                                <h2 key={index} className="text-2xl font-bold text-gray-800 mb-4">{block.value}</h2>
                            );
                        case 'text':
                            return (
                                <div
                                    key={index}
                                    className="mb-6 text-gray-800 leading-relaxed custom-text-html"
                                    dangerouslySetInnerHTML={{ __html: block.value }}
                                />
                            );
                        case 'image':
                            return (
                                <img
                                    key={index}
                                    src={`/storage/${block.value}`}
                                    alt={`Image block ${index}`}
                                    className="mb-6 rounded-lg shadow-lg w-full"
                                />
                            );
                        case 'gallery':
                            const settings = {
                                customPaging: function (i) {
                                    return (
                                        <a>
                                            <img
                                                src={`/storage/${block.value[i]}`}
                                                className="h-12 w-auto object-cover rounded"
                                                alt={`Thumbnail ${i}`}
                                            />
                                        </a>
                                    );
                                },
                                dots: true,
                                dotsClass: "slick-dots-thumbnail slick-thumb mt-4",
                                infinite: true,
                                speed: 500,
                                slidesToShow: 1,
                                slidesToScroll: 1,
                            };
                            return (
                                <div key={index} className="mb-12">
                                    {/* <h3 className="text-xl font-semibold mb-4 text-gray-800">Gallery</h3> */}
                                    <Slider {...settings} className="overflow-hidden">
                                        {block.value.map((img, i) => (
                                            <div key={i}>
                                                <img
                                                    src={`/storage/${img}`}
                                                    alt={`Gallery image ${i}`}
                                                    className="rounded-lg "
                                                />
                                            </div>
                                        ))}
                                    </Slider>
                                </div>
                            );
                        default:
                            return null;
                    }
                })}
            </section>

            <LatestPostsSection posts={posts}/>
            <Footer />
        </>
    );
}
