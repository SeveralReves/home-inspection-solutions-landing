import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "What services do you offer?",
        answer: "We provide handyman services and professional inspections to ensure quality and safety.",
    },
    {
        question: "What types of general home repairs do you handle?",
        answer: "We handle a wide variety of general home repairs, including fixing leaks, repairing drywall, minor carpentry work, door adjustments, window repairs, and much more. If you have a general home maintenance task, chances are we can help!",
    },
    {
        question: "How can I get an estimate for handyman services in Valdosta?",
        answer: "The best way to get an accurate estimate is to contact us directly. You can call us at (229) 660 4209 or fill out the contact form on our website describing the work you need. We'll get back to you promptly to discuss your project and provide a detailed estimate.",
    },
    {
        question: "Can you help with electrical fixture installations?",
        answer: "Yes, we can assist with the installation of various electrical fixtures, such as light fixtures, ceiling fans, and outlets. For major electrical work or wiring issues, we recommend consulting a qualified electrician.",
    },
    {
        question: "Why should a first-time home buyer get a home inspection in Valdosta?",
        answer: "A home inspection is crucial for first-time home buyers in Valdosta because it provides an unbiased assessment of the property's condition before you make a significant investment. It can reveal potential issues, from structural problems to minor repairs, allowing you to negotiate repairs, adjust your offer, or avoid costly surprises down the road. It offers peace of mind and helps you understand the true condition of your new home.",
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
