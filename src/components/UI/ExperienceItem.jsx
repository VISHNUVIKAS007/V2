import React from 'react';
import { experienceData } from '../data/experience';

const ExperienceItem = ({ experience }) => {
    // The root element of our item now has a class for spacing.
    return (
        <div className="experience-item-wrapper">
            <h3 className="experience-title">
                {experience.position}
                <span className="company">
                    {' '}· {experience.company}
                    {/* You can add a link here if you have one in your data */}
                </span>
            </h3>
            <p className="experience-range">{experience.duration}</p>

            <div className="experience-description">
                <ul>
                    {experience.description.map((item, index) => (
                        <li key={index}>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>

            <ul className="project-tech-list" style={{ marginTop: '20px' }}>
                {experience.technologies?.map((tech, index) => (
                    <li key={index}>{tech}</li>
                ))}
            </ul>
        </div>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="section">
            <h2 className="section-heading">
                <span className="section-number">02.</span>
                Where I've Worked
            </h2>

            {/* We now map directly inside the section, creating a clean list
              of ExperienceItem components without any extra div wrappers.
            */}
            {experienceData.map((experience) => (
                <ExperienceItem
                    key={experience.company} // Using company name as key is better if unique
                    experience={experience}
                />
            ))}
        </section>
    );
};

export default Experience;