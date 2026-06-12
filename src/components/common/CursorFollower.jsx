import { useEffect, useRef } from 'react';

const CursorFollower = () => {
    const dotRef = useRef(null);
    const ringRef = useRef(null);

    useEffect(() => {
        // Only replace the cursor on devices with a real mouse
        if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const dot = dotRef.current;
        const ring = ringRef.current;
        document.body.classList.add('custom-cursor');

        let mouseX = -100;
        let mouseY = -100;
        let ringX = -100;
        let ringY = -100;
        let rafId;

        const handleMove = (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
            dot.style.opacity = '1';
            ring.style.opacity = '1';
        };

        const handleLeave = () => {
            dot.style.opacity = '0';
            ring.style.opacity = '0';
        };

        const handleOver = (e) => {
            const interactive = e.target.closest('a, button, [role="button"], input, textarea, select');
            ring.classList.toggle('cursor-ring--hover', Boolean(interactive));
        };

        const animate = () => {
            // Ring eases toward the pointer for the trailing effect
            ringX += (mouseX - ringX) * 0.16;
            ringY += (mouseY - ringY) * 0.16;
            ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
            rafId = requestAnimationFrame(animate);
        };

        window.addEventListener('mousemove', handleMove);
        document.documentElement.addEventListener('mouseleave', handleLeave);
        document.addEventListener('mouseover', handleOver);
        rafId = requestAnimationFrame(animate);

        return () => {
            window.removeEventListener('mousemove', handleMove);
            document.documentElement.removeEventListener('mouseleave', handleLeave);
            document.removeEventListener('mouseover', handleOver);
            cancelAnimationFrame(rafId);
            document.body.classList.remove('custom-cursor');
        };
    }, []);

    return (
        <>
            <div ref={dotRef} className="cursor-dot" aria-hidden="true" />
            <div ref={ringRef} className="cursor-ring" aria-hidden="true" />
        </>
    );
};

export default CursorFollower;
