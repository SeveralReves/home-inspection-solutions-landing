import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react";
import Logo from "../../assets/images/logos/home_4.png";

export default function Footer() {
    const links = [
        { url: "#", title: "Home" },
        { url: "#", title: "About Us" },
        { url: "#", title: "Contact Us" },
    ];

    const socialLinks = [
        { url: "#", icon: <Facebook className="w-4 h-4 hover:text-secondary transition" /> },
        { url: "#", icon: <Twitter className="w-4 h-4 hover:text-secondary transition" /> },
        { url: "#", icon: <Instagram className="w-4 h-4 hover:text-secondary transition" /> },
        { url: "#", icon: <Linkedin className="w-4 h-4 hover:text-secondary transition" /> },
    ];

    const contactLinks = [
        {
            url: "mailto:hinspectionsolutions@gmail.com",
            title: "hinspectionsolutions@gmail.com",
            icon: <Mail className="w-4 h-4 text-white" />
        },
        {
            url: "tel:+12296604209",
            title: "(229) 660 4209",
            icon: <Phone className="w-4 h-4 text-white" />
        },
        {
            url: "https://maps.google.com/?q=123+Main+St,+City,+State",
            title: "3894 Stratford Cir, Valdosta, GA 31605, United States",
            icon: <MapPin className="w-4 h-4 text-white" />
        },
    ];

    return (
        <footer className="bg-primary shadow-lg w-full transition-all duration-300 ease-in-out z-50 text-white">
            <div className="container mx-auto max-w-7xl flex flex-col md:flex-row justify-center md:justify-between items-top p-6 md:p-8 gap-20">
                <div className="flex flex-col gap-6">
                    <a href="/" className="flex-shrink-0">
                        <img src={Logo} alt="Logo Home Inspections" title="Logo Home Inspections" className="h-20 w-auto" />
                    </a>
                    <div className="flex gap-6">
                        {/* Redes Sociales */}
                        {socialLinks.map((social, index) => (
                            <a key={index} href={social.url} className="text-white text-xs" target="_blank" rel="noopener noreferrer">
                                {social.icon}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Enlaces de navegación */}
                <nav className="md:ml-auto flex flex-wrap flex-col gap-5">
                    <h3 className="text-xl font-bold">Links</h3>
                    <ul className="flex flex-wrap flex-col gap-4">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} className="text-sm hover:text-terciary transition">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                {/* Enlaces de contacto */}
                <nav className="flex flex-wrap flex-col gap-5">
                    <h3 className="text-xl font-bold">Contact Us</h3>
                    <ul className="flex flex-wrap flex-col gap-4">
                        {contactLinks.map((link, index) => (
                            <li key={index} className="flex items-center gap-2 max-w-64">
                                <a href={link.url} className="flex items-center gap-2 text-sm hover:text-terciary transition">
                                    {link.icon}
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

            </div>

            {/* Línea Separadora y Copyright */}
            <div className="border-t border-gray-600 mt-4 py-4 text-center">
                <p className="text-sm text-gray-400">© {new Date().getFullYear()} Home Inspections. All Rights Reserved.</p>
            </div>
        </footer>
    );
}
