import React from 'react';
import githubLogo from './../assets/images/logos/github-logo.png';
import linkedinLogo from './../assets/images/logos/linkedin-logo.png';
import emailIcon from './../assets/images/logos/email-icon.png';

function Footer() {
    return(
        <footer className='text-white bg-color-primary mt-auto padding-top-20px'>

        <div className='d-flex flex-row justify-content-center'>

            {/* GITHUB */}
            <div className='p-2 social-icon'>
                <a href='https://github.com/cpm-128' target='_blank' rel='noopener noreferrer'>
                    <img src={githubLogo} alt='GitHub logo linked to profile' />
                </a>
            </div>

            {/* LINKEDIN */}
            <div className='p-2 social-icon'>
                <a href='https://www.linkedin.com/in/colleenmaher/' target='_blank' rel='noopener noreferrer'>
                    <img src={linkedinLogo} alt='LinkedIn logo linked to profile' />
                </a>
            </div>

            {/* EMAIL */}
            <div className='p-2 social-icon'>
                <a href='mailto:cmaher1120@gmail.com' target='_blank' rel='noopener noreferrer'>
                    <img src={emailIcon} alt='Email icon' />
                </a>
            </div>

        </div>

        <p className='d-flex flex-row justify-content-center'>&copy;2022 by Colleen Maher</p>

        </footer>
    )
};

export default Footer;