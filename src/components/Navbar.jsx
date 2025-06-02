import React from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-[#0f172a]/90 backdrop-blur-md z-50 shadow-md">
            <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                <h1 className="text-xl sm:text-2xl font-bold text-cyan-400">Vishnu S</h1>
                <div className="space-x-6 hidden md:flex">
                    {['home', 'about', 'projects', 'contact'].map((item) => (
                        <Link
                            key={item}
                            to={item}
                            smooth={true}
                            duration={500}
                            className="text-white hover:text-cyan-400 capitalize cursor-pointer transition"
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;