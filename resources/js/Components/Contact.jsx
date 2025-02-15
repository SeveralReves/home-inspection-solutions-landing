import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
  };

  return (
    <div className="max-w-5xl mx-auto my-10 p-8 bg-white rounded-3xl shadow-lg flex flex-col md:flex-row gap-6">
      {/* Mapa */}
      <div className="w-full md:w-1/2">
        <iframe
          className="w-full h-72 md:h-full rounded-3xl"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093743!2d-122.41941548468155!3d37.77492977975921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c8b6dfefb%3A0xf5442b8c3f5f10!2sSan%20Francisco!5e0!3m2!1sen!2sus!4v1617733747794!5m2!1sen!2sus"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Formulario de contacto */}
      <div className="w-full md:w-1/2 flex flex-col">
        <h2 className="text-3xl font-bold text-gray-800">CONTACT US</h2>
        <div className="h-1 w-12 bg-teal-500 my-3"></div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="What’s your name"
            value={form.name}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail*"
            value={form.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="tel"
            name="phone"
            placeholder="Number phone*"
            value={form.phone}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <textarea
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
          ></textarea>

          <button className="w-full bg-teal-500 text-white p-3 rounded-lg font-semibold hover:bg-teal-600">
            SUBMIT
          </button>
        </form>

        {/* Información de contacto */}
        <div className="mt-6 text-gray-700">
          <p className="flex items-center gap-2"><Mail className="text-teal-500"/> test@gmail.com</p>
          <p className="flex items-center gap-2"><Phone className="text-teal-500"/> (303) 555-0105</p>
          <p className="flex items-center gap-2"><MapPin className="text-teal-500"/> 2715 Ash Dr, San Jose, South Dakota 83475</p>
        </div>
      </div>
    </div>
  );
}
