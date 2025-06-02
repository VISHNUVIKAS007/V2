import { motion } from 'framer-motion';
import { personalData } from '../data/personal';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="contact-content"
            >
                <h2 className="section-heading">
                    <span className="section-number">04.</span>
                    What's Next?
                </h2>

                <h3 className="contact-title">Get In Touch</h3>

                <p className="contact-description">
                    Although I'm not currently looking for any new opportunities, my inbox is
                    always open. Whether you have a question or just want to say hi, I'll try
                    my best to get back to you!
                </p>

                <a href={`mailto:${personalData.email}`} className="contact-button">
                    Say Hello
                </a>
            </motion.div>
        </section>
    );
};

export default Contact;