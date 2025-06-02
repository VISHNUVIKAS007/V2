import { useState, useEffect } from 'react';

const NavLinks = () => {
    const [activeSection, setActiveSection] = useState('home');

    const navItems = [
        // { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
        { name: 'Contact', href: '#contact' }
    ];

    useEffect(() => {
        const handleScroll = () => {
            const sections = navItems.map(item => item.href.substring(1));
            const scrollPosition = window.scrollY + window.innerHeight / 2;

            for (let i = sections.length - 1; i >= 0; i--) {
                const section = document.getElementById(sections[i]);
                if (section && section.offsetTop <= scrollPosition) {
                    setActiveSection(sections[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = (e, href) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            const offsetTop = target.offsetTop - 100;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    };

    return (
        <ul className="nav-links">
            {navItems.map((item) => (
                <li key={item.name}>
                    <a
                        href={item.href}
                        className={`nav-link ${activeSection === item.href.substring(1) ? 'active' : ''}`}
                        onClick={(e) => handleClick(e, item.href)}
                    >
                        {item.name}
                    </a>
                </li>
            ))}
        </ul>
    );
};

export default NavLinks;