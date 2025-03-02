import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We provide handyman services and professional inspections to ensure quality and safety.",
    },
    {
        question: "How can I book an inspection?",
        answer: "You can book an inspection through our website or by calling our customer service.",
    },
    {
        question: "Do you offer emergency repairs?",
        answer: "Yes, we offer emergency repair services for urgent issues.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="bg-white">
        <div className="container mx-auto px-4 py-10">
            <div className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-3xl shadow-lg" data-aos="fade-up">
                <h2 className="text-3xl font-bold text-center text-primary mb-6" data-aos="fade-up">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg"
                            data-aos="fade-up"
                        >
                            <button
                                className="w-full flex justify-between items-center p-4 text-lg font-semibold text-gray-800 hover:bg-gray-100 rounded-lg"
                                onClick={() => toggleFAQ(index)}
                            >
                                {faq.question}
                                {openIndex === index ? (
                                    <ChevronUp className="w-5 h-5 text-primary" />
                                ) : (
                                    <ChevronDown className="w-5 h-5 text-primary" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="p-4 border-t border-gray-200 text-gray-600">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </section>
    );
}
