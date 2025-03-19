import { Link } from '@inertiajs/react';

export default function NotFound() {
    return (
        <div className="flex justify-center items-center min-h-screen ">
            <div className="text-center text-white p-6 rounded-lg shadow-2xl bg-white bg-opacity-20 max-w-lg w-full">
                <div className="mb-6">
                    <h1 className="text-8xl font-extrabold text-primary">404</h1>
                    <p className="text-2xl font-semibold text-gray-600 mt-4">Oops! The page you're looking for doesn't exist.</p>
                </div>
                <div className="flex justify-center items-center mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 text-white animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke='rgb(8 67 99)' d="M13 7l5 5-5 5M6 7l5 5-5 5" />
                    </svg>
                </div>
                <Link
                    href="/"
                    className="inline-block px-8 py-3 text-lg font-semibold text-white bg-primary rounded-full hover:bg-secondary transition duration-300"
                >
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
