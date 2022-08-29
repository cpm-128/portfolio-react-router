import React from 'react';
import githubLogo from './../assets/images/logos/github-logo.png';
import linkedinLogo from './../assets/images/logos/linkedin-logo.png';
import emailIcon from './../assets/images/logos/email-icon.png';

function Footer() {
    return(
        <div className=
            'text-white bg-dark d-flex flex-row'>

            {/* GITHUB */}
            <div className='p-2'>
                <a href='https://github.com/cpm-128'>
                    <img src={githubLogo} alt='GitHub logo linked to profile' />
                </a>
            </div>

            {/* LINKEDIN */}
            <div className='p-2'>
                <a href='https://www.linkedin.com/in/colleenmaher/'>
                    <img src={linkedinLogo} alt='LinkedIn logo linked to profile' />
                </a>
            </div>

            {/* EMAIL */}
            <div className='p-2'>
                <a href='mailto:cmaher1120@gmail.com'>
                    <img src={emailIcon} alt='Email icon' />
                </a>
            </div>

        </div>
    )
};

export default Footer;