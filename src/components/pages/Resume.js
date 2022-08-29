import React, { useState } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';

function Resume() {

    const [backendProficiencies] = useState([
        'APIs',
        'Node',
        'Express'
    ])

    return (
        <section>

            <h1>RESUME</h1>

            <a href='https://docs.google.com/document/d/1Os-AhB34JOiGA0scCg0NLdAz1jedzayccGXgS6Q7OGI/edit?usp=sharing' target='_blank'>
                <button>Download technical resume</button>
            </a>

            <h2>Front-end Proficiencies</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
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