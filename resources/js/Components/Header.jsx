import Headroom from "headroom.js";
import { useEffect, useRef } from "react";
import styles from "./Header.module.css";
import Logo from '../../assets/images/logos/home.png';

export default function Header() {
    const headerRef = useRef(null);

    useEffect(() => {
        if (headerRef.current) {
            const headroom = new Headroom(headerRef.current, {
                tolerance: 5, // Sensibilidad al scroll
                offset: 50, // Desaparece tras 50px de scroll
                classes: {
                    initial: "headroom",
                    pinned: "headroom-pinned",
                    unpinned: "headroom-unpinned"
                }
            });
            headroom.init();
        }
    }, []);

    const links = [
        { url: '#', title: 'Home' },
        { url: '#', title: 'About Us' },
        { url: '#', title: 'Contact Us' },
    ];

    return (
        <header ref={headerRef} className="fixed bg-white shadow-lg top-0 left-0 w-full transition-all duration-300 ease-in-out z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <a href="/" className="text-2xl font-bold text-blue-500">
                    <img src={Logo} className={styles.logo} alt="Logo Home Inspections" title="Logo Home Inspections" />
                </a>
                <nav className="flex space-x-6 items-center">
                    <ul className="flex space-x-6">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} className="text-primary font-bold hover:text-secondary transition">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-secondary hover:bg-primary transition duration-300 ease-in-out text-white font-semibold py-2 px-6 rounded-full shadow-lg">
                        SERVICES
                    </button>
                </nav>
            </div>
        </header>
    );
}
