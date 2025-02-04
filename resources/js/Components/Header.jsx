import Headroom from "headroom.js";
import { useEffect, useRef } from "react";

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
        <header ref={headerRef} className="fixed top-0 left-0 w-full transition-all duration-300 ease-in-out z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                <a href="/" className="text-2xl font-bold text-blue-600">
                    LOGO
                </a>
                <nav>
                    <ul className="flex space-x-6">
                        {links.map((link, index) => (
                            <li key={index}>
                                <a href={link.url} className="text-gray-700 hover:text-blue-500 transition">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
