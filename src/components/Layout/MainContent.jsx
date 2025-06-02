import Hero from '../../sections/Hero';
import About from '../../sections/About';
import Experience from '../../sections/Experience';
import Projects from '../../sections/Projects';
import Contact from '../../sections/Contact';
import Footer from '../Footer.jsx';

const MainContent = () => {
    return (
        <div className="main-content">
            {/*<Hero />*/}
            <About />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
        </div>
    );
};

export default MainContent;