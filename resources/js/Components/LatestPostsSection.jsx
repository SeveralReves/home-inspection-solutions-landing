import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from '@inertiajs/react';

export default function LatestPostsSection({ posts }) {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: { slidesToShow: 2, slidesToScroll: 2 }
            },
            {
                breakpoint: 640,
                settings: { slidesToShow: 1, slidesToScroll: 1 }
            }
        ]
    };

    return (
        <section id="projects" className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800">Latest Projects</h2>
                <p className="text-center text-gray-600 mb-8">Discover our most recent works</p>

                <Slider {...settings} className="overflow-hidden sliderposts">
                    {posts.map(post => (
                        <div key={post.id} className="px-3 mb-2">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col h-full">
                                {/* Enlazar la imagen */}
                                <Link href={route('posts.show', post.slug) } className="overflow-hidden">
                                    <img
                                        src={`/storage/${post.cover}`}
                                        alt={post.title}
                                        className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out hover:scale-105"
                                    />
                                </Link>
                                <div className="p-4 ">
                                    {/* Enlazar el título */}
                                    <Link href={route('posts.show', post.slug)}>
                                        <h3 className="text-lg font-bold text-gray-800 mb-2 transition duration-300 ease-in-out">
                                            {post.title}
                                        </h3>
                                    </Link>
                                    <p className="text-xs text-gray-400 mt-1">
                                        {new Date(post.published_at).toLocaleDateString()}
                                    </p>
                                    <span className="text-sm text-blue-600 font-medium">{post.category}</span>
                                    <p className="text-sm text-gray-600">{post.excerpt}</p>
                                    <Link
                                        href={route('posts.show', post.slug)}
                                        className="inline-block mt-3 bg-secondary hover:bg-primary transition duration-300 ease-in-out text-white font-semibold py-2 px-6 rounded-full shadow-lg"
                                    >
                                        View More →
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
                <Link
                    href={route('posts.index')}
                    className="inline-block mt-3 mx-auto text-center bg-secondary hover:bg-primary transition duration-300 ease-in-out text-white font-semibold py-2 px-6 rounded-full shadow-lg flex w-fit"
                >
                    View all →
                </Link>
            </div>
        </section>
    );
}
