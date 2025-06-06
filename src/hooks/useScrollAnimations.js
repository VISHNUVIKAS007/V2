import { useState, useEffect } from 'react';

export const useScrollAnimations = () => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        const updateScrollY = () => setScrollY(window.scrollY);

        window.addEventListener('scroll', updateScrollY);
        return () => window.removeEventListener('scroll', updateScrollY);
    }, []);

    return { scrollY };
};