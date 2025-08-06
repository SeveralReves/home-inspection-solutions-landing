import { Head } from '@inertiajs/react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';
import LatestPostsSection from '../../Components/LatestPostsSection.jsx';
import { Link } from '@inertiajs/react';

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
                {post.content?.map((block, index) => {
                    switch (block.type) {
                        case 'text':
                           return (
                                <div
                                    key={index}
                                    className="mb-6 text-gray-800 leading-relaxed"
                                    dangerouslySetInnerHTML={{ __html: block.value }}
                                />
                            );
                        case 'image':
                            return (
                                <img
                                    key={index}
                                    src={block.value}
                                    alt={`Image block ${index}`}
                                    className="mb-6 rounded-lg shadow"
                                />
                            );
                        case 'gallery':
                            return (
                                <div key={index} className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                                    {block.value.map((img, i) => (
                                        <img
                                            key={i}
                                            src={img}
                                            alt={`Gallery image ${i}`}
                                            className="rounded shadow"
                                        />
                                    ))}
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
