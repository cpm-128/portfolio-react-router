import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Resume() {

    const [frontEndProficiencies] = useState([
        'HTML',
        'CSS',
        'JavaScript',
        'jQuery',
        'Responsive Design',
        'React',
        'Bootstrap'
    ])

    const [backendProficiencies] = useState([
        'APIs',
        'Node',
        'Express',
        'MySQL',
        'Sequelize',
        'MongoDB',
        'Mongoose',
        'REST',
        'GraphQL'
    ])

    return (
        <section className='padding-standard padding-leftright'>

            <h2 className='padding-top-20px'>RESUME</h2>

            <a href='https://docs.google.com/document/d/1Os-AhB34JOiGA0scCg0NLdAz1jedzayccGXgS6Q7OGI/edit?usp=sharing' target='_blank'>
                <button className='resume-btn'>Download technical resume</button>
            </a>

            <h3 className='padding-top-20px'>Front-end Proficiencies</h3>
                <ul>
                    {/* as we go through the frontendProficiencies array, we are naming each individual item 'proficiency' */}
                    {frontEndProficiencies.map((proficiency, i) => (
                        <li>{frontEndProficiencies[i]}</li>
                    ))}
                </ul>

            <h3>Back-end Proficiencies</h3>
                <ul>
                    {/* as we go through the backendProficiencies array, we are naming each individual item 'proficiency' */}
                    {backendProficiencies.map((proficiency, i) => (
                        <li>{backendProficiencies[i]}</li>
                    ))}
                </ul>

        </section>
    )
};

export default Resume;