import {motion} from 'framer-motion';
import {personalData} from '../data/personal';

const About = () => {
    const skills = [
        'Java',
        'Android',
        'Flutter',
        'Dart',
        'Spring Boot',
        'HTML',
        'CSS',
        'JavaScript',
        'React',
        'Node.js',
        'MongoDB'
    ];

    return (
        <section id="about" className="section">
            <motion.div
                initial={{opacity: 0, y: 30}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 0.6}}
                viewport={{once: true}}
            >
                <h2 className="section-heading">
                    <span className="section-number">01.</span>
                    About Me
                </h2>

                <div className="about-content">
                    <div className="about-text">
                        <p>
                            Hi, I'm Vishnu, a seasoned Software Development Engineer dedicated to crafting solutions
                            that enhance everyday experiences. With a fervor for problem-solving through code, I
                            continually seek innovative approaches and eagerly embrace the challenge of putting them
                            into action.
                        </p>

                        <p>
                            Currently serving as a Senior Software Developer at
                            <a href="https://www.ibsplc.com" className="inline-link"> &nbsp;IBS Software</a>, I bring a wealth of experience in
                            developing impactful solutions. My journey includes stints as a Full Stack Developer, both
                            as a freelancer and as part of the dynamic team at
                            <a href="https://flysoft.eu" className="inline-link"> &nbsp;Flysoft  Gmbh</a>, a cutting-edge product development company
                            based in Germany.
                        </p>

                        <p>
                            My portfolio spans diverse software projects, tailored for various platforms including
                            mobile devices and desktops. Proficient in languages such as Java, Android, Flutter, Dart,
                            Spring Boot, HTML, CSS, and JavaScript, I thrive on transforming ideas into efficient and
                            scalable solutions. Let's explore the possibilities of creating impactful software together!
                        </p>

                        <p>
                            Here are a few technologies I've been working with recently:
                        </p>

                        <ul className="skills-list">
                            {skills.map((skill, index) => (
                                <li key={skill} className="skill-item">
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/*<div className="about-image">*/}
                    {/*    <div className="image-wrapper">*/}
                    {/*        <img*/}
                    {/*            src="/profile.jpg"*/}
                    {/*            alt={personalData.name}*/}
                    {/*            className="profile-image"*/}
                    {/*        />*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </motion.div>
        </section>
    );
};

export default About;