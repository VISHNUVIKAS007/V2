import React from 'react';
import {motion} from 'framer-motion';

const Footer = () => {
    return (
        <footer className="footer">
            <motion.div
                className="footer-content"
                initial={{opacity: 0, y: 20}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                viewport={{once: true}}
            >
                <p className="footer-text">
                    Design inspired by{' '}
                    <a
                        href="https://brittanychiang.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-link"
                    >
                        Brittany Chiang
                    </a>
                </p>
                <p className="footer-built">
                    Built with React & Framer Motion
                </p>
            </motion.div>
        </footer>
    );
};

export default Footer;