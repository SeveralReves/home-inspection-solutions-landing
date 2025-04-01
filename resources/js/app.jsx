import './bootstrap';
import '../css/app.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { createRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title ? `${title} - ` : ''}${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        AOS.init({
            duration: 700,  // Duración de las animaciones
            easing: "ease-in-out",  // Easing de la animación
            once: true,  // Solo la primera vez
        });
        document.querySelector('meta[name="description"]').setAttribute('content', props.initialPage.props.meta_description || 'Descripción por defecto');

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
