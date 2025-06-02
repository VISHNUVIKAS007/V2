import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';
import { personalData } from '../../data/personal';

const SocialLinks = () => {
    const socialItems = [
        { name: 'GitHub', icon: FaGithub, url: personalData.social?.github },
        { name: 'LinkedIn', icon: FaLinkedin, url: personalData.social?.linkedin },
        { name: 'Twitter', icon: FaTwitter, url: personalData.social?.twitter },
        { name: 'Instagram', icon: FaInstagram, url: personalData.social?.instagram }
    ];

    return (
        <div className="social-links">
            {socialItems.map((item, index) => {
                if (!item.url) return null;

                const IconComponent = item.icon;

                return (
                    <motion.a
                        key={item.name}
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="social-link"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                        whileHover={{ y: -3 }}
                    >
                        <IconComponent />
                    </motion.a>
                );
            })}
        </div>
    );
};

export default SocialLinks;