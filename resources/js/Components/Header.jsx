import { useEffect, useRef, useState } from "react";
import Headroom from "headroom.js";
import { Menu, X } from "lucide-react"; // Íconos del menú
import styles from "./Header.module.css";
import Logo from "../../assets/images/logos/home.png";

export default function Header() {
    const headerRef = useRef(null);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        if (headerRef.current) {
            const headroom = new Headroom(headerRef.current, {
                tolerance: 5,
                offset: 50,
                classes: {
                    initial: "headroom",
                    pinned: "headroom-pinned",
                    unpinned: "headroom-unpinned",
                },
            });
            headroom.init();
        }
    }, []);

    const links = [
        { url: "#home", title: "Home" },
        { url: "#handyman", title: "Handyman" },
        { url: "#inspections", title: "Inspections" },
        { url: "#about", title: "About Us" },
    ];

    return (
        <header
            ref={headerRef}
            className="fixed bg-white shadow-lg top-0 left-0 w-full transition-all duration-300 ease-in-out z-50"
        >
            <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <a href="/" className="text-2xl font-bold text-blue-500">
                    <img
                        src={Logo}
                        className={styles.logo}
                        alt="Logo Home Inspections"
                        title="Logo Home Inspections"
                    />
                </a>

                {/* Menú Desktop */}
                <nav className="hidden md:flex space-x-6 items-center">
                    <ul className="flex space-x-6">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a
                                    href={link.url}
                                    className="text-primary font-bold hover:text-secondary transition"
                                >
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <a
                        href="#contact"
                        className="bg-secondary hover:bg-primary transition duration-300 ease-in-out text-white font-semibold py-2 px-6 rounded-full shadow-lg"
                    >
                        Contact Us
                    </a>
                </nav>

                {/* Botón Menú Hamburguesa (Solo en móviles) */}
                <button
                    className="md:hidden text-gray-700 focus:outline-none"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Menú Mobile */}
            <div
                className={`md:hidden fixed top-0 left-0 w-full h-full bg-white shadow-lg transform ${
                    menuOpen ? "translate-x-0" : "-translate-x-full"
                } transition-transform duration-300 ease-in-out z-40`}
            >
                <div className="flex justify-between items-center p-4">
                    <a href="/" className="text-2xl font-bold text-blue-500">
                        <img
                            src={Logo}
                            className={styles.logo}
                            alt="Logo Home Inspections"
                            title="Logo Home Inspections"
                        />
                    </a>
                    <button
                        className="text-gray-700 focus:outline-none"
                        onClick={() => setMenuOpen(false)}
                    >
                        <X size={32} />
                    </button>
                </div>
                <ul className="flex flex-col items-center space-y-6 mt-10">
                    {links.map((link, index) => (
                        <li key={index}>
                            <a
                                href={link.url}
                                className="text-xl font-bold text-gray-700 hover:text-secondary transition"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                    <li>
                        <a
                            href="#contact"
                            className="bg-secondary hover:bg-primary transition duration-300 ease-in-out text-white font-semibold py-3 px-8 rounded-full shadow-lg"
                            onClick={() => setMenuOpen(false)}
                        >
                            Contact Us
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
