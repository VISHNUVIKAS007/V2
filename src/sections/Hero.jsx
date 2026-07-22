import { motion } from 'framer-motion';
import { personalData } from '../data/personal';

const Hero = () => {
    return (
        <section id="hero" className="section hero-section">
            <motion.div
                className="reveal"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <motion.h1
                    className="hero-greeting reveal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    Hi, my name is
                </motion.h1>

                <motion.h2
                    className="hero-name reveal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    {personalData.name}.
                </motion.h2>

                <motion.h3
                    className="hero-title reveal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                >
                    {personalData.tagline}
                </motion.h3>

                <motion.p
                    className="hero-description reveal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                >
                    {personalData.bio}
                </motion.p>

                <motion.div
                    className="hero-cta reveal"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 }}
                >
                    <a href="#projects" className="cta-button">
                        Check out my work!
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;