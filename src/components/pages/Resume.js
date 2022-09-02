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
        <section>

            <h2>RESUME</h2>

            <a href='https://docs.google.com/document/d/1Os-AhB34JOiGA0scCg0NLdAz1jedzayccGXgS6Q7OGI/edit?usp=sharing' target='_blank'>
                <button>Download technical resume</button>
            </a>

            <h2>Front-end Proficiencies</h2>
                <ul>
                    {/* as we go through the frontendProficiencies array, we are naming each individual item 'proficiency' */}
                    {frontEndProficiencies.map((proficiency, i) => (
                        <li>{frontEndProficiencies[i]}</li>
                    ))}
                </ul>

            <h2>Back-end Proficiencies</h2>
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