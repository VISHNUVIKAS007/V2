import React from 'react';
import { experienceData } from '../data/experience';


const ExperienceItem = ({ experience }) => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 3fr',
            gap: '20px',
            paddingBottom: '60px',
            borderBottom: '1px solid var(--color-lightest-navy)',
            marginBottom: '60px'
        }}>
            {/* Left column - Date */}
            <div style={{
                position: 'sticky',
                top: '100px',
                height: 'fit-content'
            }}>
                <p style={{
                    margin: '0',
                    color: 'var(--color-light-slate)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'var(--fz-xs)',
                    fontWeight: '500',
                    textTransform: 'uppercase',
                    letterSpacing: '1px'
                }}>
                    {experience.duration}
                </p>
            </div>

            {/* Right column - Job details */}
            <div>
                <h3 style={{
                    margin: '0 0 8px 0',
                    fontSize: 'var(--fz-xl)',
                    fontWeight: '600',
                    color: 'var(--color-lightest-slate)',
                    lineHeight: '1.3'
                }}>
                    {experience.position} · {experience.company}
                    {experience.company === "Klaviyo" && (
                        <span style={{
                            marginLeft: '8px',
                            fontSize: '14px',
                            transform: 'rotate(-45deg)',
                            display: 'inline-block'
                        }}>↗</span>
                    )}
                    {experience.company === "Upstatement" && (
                        <span style={{
                            marginLeft: '8px',
                            fontSize: '14px',
                            transform: 'rotate(-45deg)',
                            display: 'inline-block'
                        }}>↗</span>
                    )}
                </h3>

                {experience.subtitle && (
                    <p style={{
                        margin: '0 0 15px 0',
                        fontSize: 'var(--fz-sm)',
                        color: 'var(--color-slate)',
                        fontWeight: '400'
                    }}>
                        {experience.subtitle}
                    </p>
                )}

                <div style={{
                    margin: '0 0 20px 0',
                    color: 'var(--color-slate)',
                    fontSize: 'var(--fz-md)',
                    lineHeight: '1.6'
                }}>
                    {Array.isArray(experience.description) ? (
                        <ul style={{
                            margin: 0,
                            paddingLeft: '20px',
                            listStyleType: 'disc'
                        }}>
                            {experience.description.map((item, index) => (
                                <li key={index} style={{ marginBottom: '8px' }}>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p style={{ margin: 0 }}>{experience.description}</p>
                    )}
                </div>

                <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: '8px',
                    marginTop: '20px'
                }}>
                    {experience.technologies.map((tech, index) => (
                        <span
                            key={index}
                            style={{
                                fontSize: 'var(--fz-xs)',
                                color: 'var(--color-green)',
                                backgroundColor: 'var(--color-green-tint)',
                                padding: '6px 12px',
                                borderRadius: '20px',
                                fontWeight: '500'
                            }}
                        >
              {tech}
            </span>
                    ))}
                </div>
            </div>
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

            <div className="section-inner">
                {experienceData.map((experience) => (
                    <ExperienceItem
                        key={experience.company}
                        experience={experience}
                    />
                ))}
            </div>
        </section>
    );
};

export default Experience;