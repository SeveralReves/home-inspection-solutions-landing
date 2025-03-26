import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const GOOGLE_API_KEY = ""; // 🔴 Reemplázala con tu API Key
const PLACE_ID = "ChIJTbE32hZXCmYRiN54isiFgO0"; // 🔴 Reemplázalo con el Place ID de tu negocio

export default function GoogleReviews() {
    const [reviews, setReviews] = useState([]);
    const reviewsDefault = [
        {
            "author_name": "Pedro Haranki Rafaschieri",
            "author_url": "https://www.google.com/maps/contrib/100039589469390693500/reviews",
            "language": "en",
            "original_language": "en",
            "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocIRfSlRakbE_LmlXUa-SdVIYFE1C7hApIONsC08568VzABg3A=s128-c0x00000000-cc-rp-mo",
            "rating": 5,
            "relative_time_description": "a month ago",
            "text": "Excellent Work by Mr. Enrique’s Home Handyman Solutions LLC!\n\nI recently hired Mr. Enrique’s Home Handyman Solutions LLC to build a porch for the back of my house, and I couldn’t be happier with the results! From start to finish, Enrique and his team displayed outstanding professionalism, craftsmanship, and attention to detail.\n\nThe quality of their work is top-notch—sturdy construction, precise measurements, and a clean, well-finished look. Enrique took the time to ensure everything was done perfectly, and his expertise really shows in the final product. He also maintained excellent communication throughout the project, keeping me informed and making sure I was satisfied every step of the way.\n\nNot only was the work completed on time, but the team also left the job site clean and organized. It’s clear that Enrique takes great pride in his work, and it reflects in the durability and beauty of the porch.",
            "time": 1740273915,
            "translated": false
        },
        {
            "author_name": "Tambrea Ellison",
            "author_url": "https://www.google.com/maps/contrib/110616731204657906000/reviews",
            "language": "en",
            "original_language": "en",
            "profile_photo_url": "https://lh3.googleusercontent.com/a-/ALV-UjXPd7ruD6GnE4OiKGv2dNwsuDOtj573SqHK7GPYbbLX8WcJ0o55=s128-c0x00000000-cc-rp-mo",
            "rating": 5,
            "relative_time_description": "a month ago",
            "text": "Enrique’s service was absolutely phenomenal! He is reliable, punctual, professional, polite, and knowledgable. Services are reasonably priced. I will definitely use his servies again. He comes highly recommended!",
            "time": 1737937996,
            "translated": false
        },
        {
            "author_name": "Doug Kaufman",
            "author_url": "https://www.google.com/maps/contrib/117411504687801554373/reviews",
            "language": "en",
            "original_language": "en",
            "profile_photo_url": "https://lh3.googleusercontent.com/a/ACg8ocJifEXmzflvKeBAxfiNbXh5IFSzpsOIdzsAxInbkX8vsnjr5w=s128-c0x00000000-cc-rp-mo",
            "rating": 5,
            "relative_time_description": "a month ago",
            "text": "Enrique did a fabulous job in short order. I can't say enough about his great work kind nature and he is a great guy to work with. You would be crazy not to hire him. Thank you so much and i will have you do more work ahead!! 10 stars out of 5.",
            "time": 1738895804,
            "translated": false
        },
    ];

    useEffect(() => {
        async function fetchReviews() {
            try {
                const response = await fetch(
                    `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews&key=${GOOGLE_API_KEY}`
                );
                const data = await response.json();

                if (data.result?.reviews) {
                    setReviews(data.result.reviews || reviewsDefault);
                } else {
                    console.error("No reviews found.");
                }
            } catch (error) {
                console.error("Error fetching reviews:", error);
                setReviews(reviewsDefault);
            }
        }

        fetchReviews();
    }, []);

    return (
        <section className="container mx-auto px-4 py-20">

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {reviews.length > 0 ? (
                    reviews.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-lg shadow-lg"
                            data-aos="fade-up"
                        >
                            <div className="flex items-center mb-2">
                                <img
                                    src={review.profile_photo_url}
                                    alt={review.author_name}
                                    className="w-10 h-10 rounded-full mr-3"
                                />
                                <div>
                                    <p className="font-semibold">
                                        {review.author_name}
                                    </p>
                                    <p className="text-xs text-gray-500">
                                        {new Date(
                                            review.time * 1000
                                        ).toLocaleDateString()}
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-center mb-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        fill={i < review.rating ? "currentColor" : "none"}
                                        className={`w-5 h-5 ${i < review.rating
                                            ? "text-yellow-300"
                                            : "text-gray-300"
                                            }`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 text-sm line-clamp-6">
                                {review.text}
                            </p>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">
                        No reviews available.
                    </p>
                )}
            </div>
        </section>
    );
}
