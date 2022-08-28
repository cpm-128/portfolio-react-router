import React from 'react';
import headshot from '../../assets/images/headshot/funshot_small.jpg';

function About() {
    return (
        <div>

            {/* headshot or avatar */}

            {/* short bio */}
            <section>
                <h2>Hi, I'm Colleen. <br/>
                <span>I'm a full-stack web developer.</span></h2>
                <img src={headshot} alt='headshot' style={{ width: '50%' }} />
            </section>

            <section>
                <p>
                    I'm a full-stack web developer and an upcoming graduate from the University of North Carolina at Chapel Hill.
                    Newly developed skills include JavaScript, managing databases, responsive web design, and following the Model-View-Controller paradigm. Strengths in creativity, teamwork, and building projects from ideation to execution.
                    I'm currently focusing on completing my certificate and will be open to full-time, contract, and freelancing opportunities.
                </p>
            </section>

        </div>
    )
};

export default About;