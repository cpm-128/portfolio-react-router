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
        'Node.js',
        'Express.js',
        'SQL',
        'MySQL',
        'NoSQL',
        'Object Relational Mapping',
        'Object Oriented Programming',
        'Sequelize',
        'MongoDB',
        'Mongoose',
        'REST APIs',
        'GraphQL'
    ])

    return (
        <section className='padding-standard padding-leftright'>

            <h2 className='padding-top-20px'>RESUME</h2>

            <a href='https://drive.google.com/file/d/1qANtEMIB5rxBSloFJTTvOcDNCjuZcE41/view?usp=sharing' target='_blank'>
                <button className='resume-btn'>Download technical resume</button>
            </a>

            {/* flex parent container */}
            <div className='d-flex flex-row flex-wrap justify-content-start align-self-stretch col-12 padding-top-20px'>

                {/* child left */}
                <div className='col-12 col-md-3'>
                    <h3>Front-end Proficiencies</h3>
                    <ul>
                        {/* as we go through the frontendProficiencies array, we are naming each individual item 'proficiency' */}
                        {frontEndProficiencies.map((proficiency, i) => (
                            <li>{frontEndProficiencies[i]}</li>
                        ))}
                    </ul>
                </div>

                {/* child right */}
                <div className='col-12 col-md-3'>
                    <h3>Back-end Proficiencies</h3>
                    <ul>
                        {/* as we go through the backendProficiencies array, we are naming each individual item 'proficiency' */}
                        {backendProficiencies.map((proficiency, i) => (
                            <li>{backendProficiencies[i]}</li>
                        ))}
                    </ul>
                    </div>

            </div>

        </section>
    )
};

export default Resume;