import { useEffect, useState } from "react";
import { Star } from "lucide-react";

const GOOGLE_API_KEY = ""; // 🔴 Reemplázala con tu API Key
const PLACE_ID = "ChIJTbE32hZXCmYRiN54isiFgO0"; // 🔴 Reemplázalo con el Place ID de tu negocio

export default function GoogleReviews() {
    const [reviews, setReviews] = useState([]);
    const reviewsDefault = [
        {
            author_name: "Doug Kaufman",
            author_url:
                "https://www.google.com/maps/contrib/117411504687801554373/reviews",
            language: "en",
            original_language: "en",
            profile_photo_url:
                "https://lh3.googleusercontent.com/a/ACg8ocJifEXmzflvKeBAxfiNbXh5IFSzpsOIdzsAxInbkX8vsnjr5w=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            relative_time_description: "a week ago",
            text: "Enrique did a fabulous job in short order. I can't say enough about his great work kind nature and he is a great guy to work with. You would be crazy not to hire him. Thank you so much and i will have you do more work ahead!! 10 stars out of 5.",
            time: 1738895804,
            translated: false,
        },
        {
            author_name: "Farrah Lovell",
            author_url:
                "https://www.google.com/maps/contrib/103701237949620410397/reviews",
            language: "en",
            original_language: "en",
            profile_photo_url:
                "https://lh3.googleusercontent.com/a/ACg8ocJHX1H4h4x_MPpS22KwQxVU4JGvwBbm_cw0GzL-OS9MBY5y9Q=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            relative_time_description: "2 months ago",
            text: "Mr Enrique was punctual, professional and respectful.  Excellent job, well satisfied and recommend 100%.  Will definitely use again.\nThank you for putting trust back in people.",
            time: 1733502118,
            translated: false,
        },
        {
            author_name: "Francisco Pastor",
            author_url:
                "https://www.google.com/maps/contrib/111262485563833853540/reviews",
            language: "en",
            original_language: "en",
            profile_photo_url:
                "https://lh3.googleusercontent.com/a/ACg8ocJld7ecntgOLNrrLPLJJmaN3-inBMqPX6HHpVkRKI9v0xgumA=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            relative_time_description: "2 weeks ago",
            text: "I was looking for a handyman that can take care of minor  repairs around my home and  called home handyman solutions and Enrique did an excellent work. Great communication, price was according with the quality provided . For your home repair needs give them a call",
            time: 1738016172,
            translated: false,
        },
        {
            author_name: "Jesmaly Vasquez",
            author_url:
                "https://www.google.com/maps/contrib/117731565107711709805/reviews",
            language: "en",
            original_language: "en",
            profile_photo_url:
                "https://lh3.googleusercontent.com/a-/ALV-UjVTl1-wcetDtnGG3OH7peINdTFKOJhEveIgJZ8AnVlQ5G4ab1SZ=s128-c0x00000000-cc-rp-mo",
            rating: 5,
            relative_time_description: "3 months ago",
            text: "Mr. Enrique was kind, patient, and professional, he clarified my doubt and explained everything that I asked him. I recommend his company 100%.",
            time: 1730162938,
            translated: false,
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
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-6"  data-aos="fade-up">
                Customer Reviews
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                                        className={`w-5 h-5 ${
                                            i < review.rating
                                                ? "text-yellow-400"
                                                : "text-gray-300"
                                        }`}
                                    />
                                ))}
                            </div>

                            <p className="text-gray-600 text-sm">
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
