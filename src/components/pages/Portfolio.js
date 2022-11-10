import React, { useState } from 'react';
import { allUpper } from '../../utils/helpers';
//import image from '../../assets/images/projects'

function Portfolio() {

    const [projects] = useState([
        {
            title: 'Hand Me Up',
            type: 'MERN Multi-Page App',
            image: require('../../assets/images/projects/hand-me-up.png'),
            description: 'A scalable, user-focused MERN application with a robust back-end and mobile-first front-end designed. Built with a team from ideation to deployment.',
            deployed: 'https://polar-chamber-11415.herokuapp.com/',
            repo: 'https://github.com/olivelliott/hand-me-up'
        },
        {
            title: 'Local Music Scene',
            type: 'full stack application',
            image: require('../../assets/images/projects/local-music-scene.jpg'),
            description: 'Designed and developed an application with a robust back-end and intuitive front-end. Used agile development methodologies with this team build to create a responsive, mobile-first design.',
            deployed: 'https://damp-plateau-16490.herokuapp.com/',
            repo: 'https://github.com/cpm-128/local-music-scene'
        },
        {
            title: 'Deep Thoughts',
            type: 'MERN',
            image: require('../../assets/images/projects/deep-thoughts.png'),
            description: 'A multipage social media application built using the MERN stack.',
            deployed: 'https://murmuring-bastion-58732.herokuapp.com/',
            repo: 'https://github.com/cpm-128/deep-thoughts'
        },
        {
            title: 'Employee Tracker',
            type: 'MySQL',
            image: require('../../assets/images/projects/employee-tracker.png'),
            description: 'A command-line application that manages a companys employee database using Node.js, Inquirer, and MySQL.',
            deployed: 'https://drive.google.com/file/d/11XcfbfJ1694hg6FKGiZGUbNXT_4iEfTG/view',
            repo: 'https://github.com/cpm-128/employee-tracker'
        },
        {
            title: 'Team Profile Generator',
            type: 'OOP & node.js',
            image: require('../../assets/images/projects/team-profile-generator-webpage.png'),
            description: 'A Node.js command-line application that accepts uers input and generates an HTML webpage.',
            deployed: 'https://drive.google.com/file/d/1wpwMjsmf8UXjHD7nRdHcQpE38q-xi-CJ/view',
            repo: 'https://github.com/cpm-128/team-profile-generator'
        },
        {
            title: 'ReadMe Generator',
            type: 'node.js',
            image: require('../../assets/images/projects/readme-generator.png'),
            description: 'A comand-line application that dynamically generates a professional README.md file from user input.',
            deployed: 'https://drive.google.com/file/d/1hvIpOihKkD4UPbYJUsXNrN3be-A1KiOb/view',
            repo: 'https://github.com/cpm-128/readme-generator'
        },
        {
            title: 'Investment Portfolio',
            type: 'full stack team project',
            image: require('../../assets/images/projects/investment-portfolio-dashboard.png'),
            description: 'Interactive front-end project with team collaboration from project idea through to execution.',
            deployed: 'https://damp-plateau-16490.herokuapp.com/',
            repo: 'https://github.com/cpm-128/investment-portfolio-dashboard'
        },
        {
            title: 'The Tech Blog',
            type: 'model-view-controller',
            image: require('../../assets/images/projects/tech-blog.png'),
            description: 'A CMS-style blog site that utilizes Sequelize as the ORM, Handlebars.js, and express-session for authentication.',
            deployed: 'https://whispering-dusk-78788.herokuapp.com/',
            repo: 'https://github.com/cpm-128/tech-blog'
        },
        {
            title: 'Just Tech News',
            type: 'model-view-controller',
            image: require('../../assets/images/projects/just-tech-news.png'),
            description: 'A blog app that utilizes ORM to connect with a SQL database and dynamic HTML using Handlebars.js.',
            deployed: 'https://powerful-oasis-35251.herokuapp.com/',
            repo: 'https://github.com/cpm-128/just-tech-news'
        },
        {
            title: 'Zoo Keepr',
            type: 'express js',
            image: require('../../assets/images/projects/zoo-keepr.png'),
            description: 'Create server-side APIs using the Express.js framework with a provided front-end.',
            deployed: 'https://fathomless-oasis-00691.herokuapp.com/',
            repo: 'https://github.com/cpm-128/zookeepr'
        },
        {
            title: 'Weather Dashboard',
            type: 'server side apis',
            image: require('../../assets/images/projects/weather-dahsboard.png'),
            description: 'A browser application featuring dynamically updated HTML and CSS. Utilizes the OpenWeather One Call API.',
            deployed: 'https://cpm-128.github.io/weather-dashboard/',
            repo: 'https://github.com/cpm-128/weather-dashboard'
        },
        {
            title: 'Git It Done',
            type: 'SERVER SIDE APIs',
            image: require('../../assets/images/projects/git-it-done.png'),
            description: 'Dynamically update HTML and CSS powered by JavaScript and Server Side APIs.',
            deployed: 'https://cpm-128.github.io/git-it-done/',
            repo: 'https://github.com/cpm-128/git-it-done'
        },
        {
            title: 'Work Day Scheduler',
            type: 'THIRD PARTY APIs',
            image: require('../../assets/images/projects/work-day-scheduler.png'),
            description: 'A simple calendar application to save events for each hour of the day. Dynamic content powered by jQuery and Bootstrap.',
            deployed: 'https://cpm-128.github.io/work-day-scheduler/',
            repo: 'https://github.com/cpm-128/work-day-scheduler'
        },
        {
            title: 'Task Manager',
            type: 'WEB APIs',
            image: require('../../assets/images/projects/task-manager.png'),
            description: 'A simple application to manage to-do lists, task status, and task categories.',
            deployed: 'https://cpm-128.github.io/task-manager/',
            repo: 'https://github.com/cpm-128/task-manager'
        },
        {
            title: 'Password Generator',
            type: 'JavaScript',
            image: require('../../assets/images/projects/password-generator.png'),
            description: 'A JavaScript web application to generate a random password based on user-selected criteria.',
            deployed: 'https://cpm-128.github.io/password-generator/',
            repo: 'https://github.com/cpm-128/password-generator'
        },
        {
            title: 'Portfolio',
            type: 'HTML/CSS',
            image: require('../../assets/images/projects/portfolio-img.png'),
            description: 'A multipage web application build with HTML and CSS.',
            deployed: 'https://cpm-128.github.io/portfolio/',
            repo: 'https://github.com/cpm-128/portfolio'
        },
    ])

    return (
        <section className='padding-standard padding-leftright'>

            <h2 className='padding-top-20px'>PORTFOLIO</h2>

            {/* flex parent container */}
            <div className='d-flex flex-row flex-wrap align-self-stretch col-12'>

                {/* flex children, project cards */}
                {projects.map((project, i) => (
                <div className='card p-2 col-12 col-md-4' style={{width: '18rem'}}>
                    <div>
                        <img
                            className='card-img-top'
                            src={project.image}
                            alt={`Screencapture of ${project.title} application.`}
                            key={project.title}
                        />
                        <div className='card-body'>
                            <h4 className='card-title'>{project.title}</h4>
                            <h6>{allUpper(project.type)}</h6>
                            <p className='card-text'>{project.description}</p>
                            <a href={project.deployed} className='card-link' target='_blank' rel='noopener noreferrer'>Deployed app</a>
                            <a href={project.repo} className='card-link' target='_blank' rel='noopener noreferrer'>Repository</a>
                        </div>
                    </div>
                </div>
                ))}

            </div>

        </section>
    )
};

export default Portfolio;