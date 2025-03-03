import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { Mail, Phone, MapPin } from "lucide-react";

// 6LckSegqAAAAAB9YE0esynHV1UK2VXDjn8tF4ovf secret key
export default function Contact() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        message: "",
    });

    const [errors, setErrors] = useState({});
    const [captchaValue, setCaptchaValue] = useState(null);

    const validate = () => {
        let newErrors = {};

        if (!form.name.trim()) newErrors.name = "Name is required.";
        if (!form.email.trim()) {
            newErrors.email = "Email is required.";
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
            newErrors.email = "Invalid email format.";
        }
        if (!form.phone.trim()) {
            newErrors.phone = "Phone number is required.";
        } else if (!/^\d{10,15}$/.test(form.phone)) {
            newErrors.phone = "Invalid phone number.";
        }
        // if (!form.message.trim()) newErrors.message = "Message is required.";
        if (!captchaValue) newErrors.captcha = "Please verify reCAPTCHA.";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e) => {
        setForm((prevForm) => {
            const updatedForm = { ...prevForm, [e.target.name]: e.target.value };
            // Validación en tiempo real
            validateField(e.target.name, updatedForm);
            return updatedForm;
        });
    };

    const validateField = (field, updatedForm) => {
        let error = "";

        if (field === "name" && !updatedForm.name.trim()) error = "Name is required.";
        if (field === "email") {
            if (!updatedForm.email.trim()) error = "Email is required.";
            else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(updatedForm.email)) error = "Invalid email format.";
        }
        if (field === "phone") {
            if (!updatedForm.phone.trim()) error = "Phone number is required.";
            else if (!/^\d{10,15}$/.test(updatedForm.phone)) error = "Invalid phone number.";
        }
        if (field === "message" && !updatedForm.message.trim()) error = "Message is required.";

        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: error,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Message sent successfully!");
            setForm({ name: "", email: "", phone: "", message: "" });
            setCaptchaValue(null);
            setErrors({});
        }
    };

    return (
        <div className="max-w-6xl mx-auto my-10 bg-white rounded-3xl shadow-lg flex flex-col md:flex-row gap-6">
            {/* Mapa */}
            <div className="w-full md:w-2/5">
                <iframe
                    className="w-full h-72 md:h-full rounded-3xl"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093743!2d-122.41941548468155!3d37.77492977975921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8b6dfefb%3A0xf5442b8c3f5f10!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1617733747794!5m2!1sen!2sus"
                    allowFullScreen=""
                    loading="lazy"
                ></iframe>
            </div>

            {/* Formulario de contacto */}
            <div className="flex-1 flex flex-col gap-5 p-8">
                <h2 className="text-3xl font-bold text-gray-800">CONTACT US</h2>
                <div className="h-1 w-12 bg-primary my-3"></div>

                <div className="flex gap-5">
                    <form onSubmit={handleSubmit} className="space-y-4 w-full">
                        <div>
                            <input
                                type="text"
                                name="name"
                                placeholder="What’s your name"
                                value={form.name}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                        </div>

                        <div>
                            <input
                                type="email"
                                name="email"
                                placeholder="E-mail*"
                                value={form.email}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                        </div>

                        <div>
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Number phone*"
                                value={form.phone}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            />
                            {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                        </div>

                        <div>
                            <textarea
                                name="message"
                                placeholder="Message"
                                value={form.message}
                                onChange={handleChange}
                                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
                            ></textarea>
                            {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
                        </div>

                        {/* reCAPTCHA */}
                        <div className="flex justify-center">
                            <ReCAPTCHA
                                sitekey="6LckSegqAAAAANRQYQTG00kCVZ2Nx8szku3YYZnP"
                                onChange={(value) => setCaptchaValue(value)}
                            />
                        </div>
                        {errors.captcha && <p className="text-red-500 text-sm text-center">{errors.captcha}</p>}

                        <button className="w-full bg-secondary hover:bg-primary transition duration-300 text-white p-3 rounded-full font-semibold">
                            SUBMIT
                        </button>
                    </form>

                    {/* Información de contacto */}
                    <div className="text-gray-700 hover:text-secondary flex flex-col gap-4">
                        <a href="mailto:hinspectionsolutions@gmail.com" target="_blank" rel="noopener noreferrer" className="flex gap-2">
                            <Mail className="text-secondary" />
                            <span className="flex-1">hinspectionsolutions@gmail.com</span>
                        </a>
                        <p className="flex gap-2">
                            <Phone className="text-secondary" />
                            <span className="flex-1">(229) 660 4209</span>
                        </p>
                        <p className="flex gap-2">
                            <MapPin className="text-secondary" />
                            <span className="flex-1">3894 Stratford Cir, Valdosta, GA 31605, Estados Unidos</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
