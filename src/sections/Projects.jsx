import React from 'react';
import {projects} from '../data/projects';
import {motion} from 'framer-motion';
import {FaGithub, FaExternalLinkAlt} from 'react-icons/fa';

const Projects = () => {

    return (
        <section id="projects" className="section">
            <div className="section-content">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    transition={{duration: 0.6}}
                    viewport={{once: true}}
                >
                    <h2 className="section-title">Projects</h2>

                    <div className="projects-grid">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                className="project-card"
                                initial={{opacity: 0, y: 30}}
                                whileInView={{opacity: 1, y: 0}}
                                transition={{duration: 0.6, delay: index * 0.1}}
                                viewport={{once: true}}
                            >
                                {/* Project image - uncomment when you want to display images */}
                                {/*
                                <div className="project-image">
                                    <img src={project.image} alt={project.title} />
                                </div>
                                */}

                                <div className="project-content">
                                    <div className="project-header">
                                        <h3 className="project-title">
                                            <a
                                                href={project.external}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="project-title-link"
                                            >
                                                {project.title}
                                            </a>
                                        </h3>
                                        {/*<div className="project-links">*/}
                                        {/*    /!* GitHub Repository Link - uncomment when needed *!/*/}
                                        {/*    /!**/}
                                        {/*    {project.github && (*/}
                                        {/*        <a*/}
                                        {/*            href={project.github}*/}
                                        {/*            target="_blank"*/}
                                        {/*            rel="noopener noreferrer"*/}
                                        {/*            aria-label="GitHub Repository"*/}
                                        {/*        >*/}
                                        {/*            <FaGithub/>*/}
                                        {/*        </a>*/}
                                        {/*    )}*/}
                                        {/*    *!/*/}
                                        {/*    {project.external && (*/}
                                        {/*        <a*/}
                                        {/*            href={project.external}*/}
                                        {/*            target="_blank"*/}
                                        {/*            rel="noopener noreferrer"*/}
                                        {/*            aria-label="External Link"*/}
                                        {/*        >*/}
                                        {/*            <FaExternalLinkAlt/>*/}
                                        {/*        </a>*/}
                                        {/*    )}*/}
                                        {/*</div>*/}
                                    </div>

                                    <p className="project-description">
                                        {project.description}
                                    </p>

                                    <div className="project-tech">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="tech-tag">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/*<div className="projects-archive">*/}
                    {/*    <a href="/archive" className="archive-link">*/}
                    {/*        View Full Project Archive*/}
                    {/*    </a>*/}
                    {/*</div>*/}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;