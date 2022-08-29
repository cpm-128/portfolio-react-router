import React, { useState } from 'react';

function Portfolio() {

    const [projects] = useState([
        {
            image: './../../images/projects/local-music-scene.jpg',
            title: 'Local Music Scene',
            deployed: 'https://damp-plateau-16490.herokuapp.com/',
            repo: 'https://github.com/cpm-128/local-music-scene'
        },
    ])

    return (
        <section>

            <h1>PORTFOLIO</h1>

            {/* flex parent container */}
            <div className='d-flex flex-row flex-wrap justify-content-around align-self-stretch'>

            <div className='card p-2' style={{width: '18rem'}}>
                <img className='card-img-top' src='...' alt='Card image cap' />
                <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>
                    <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            <div className='card p-2' style={{width: '18rem'}}>
                <img className='card-img-top' src='...' alt='Card image cap' />
                <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>
                    <p className='card-text'>Some dfsdfdsfd sdfsdfsdf sdfsdf sdfsdf sdf sdfds sdfsd fsdfsdfsdf sdfsdfds fsdfsdf sdf sdf quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>
            <div className='card p-2' style={{width: '18rem'}}>
                <img className='card-img-top' src='...' alt='Card image cap' />
                <div className='card-body'>
                    <h5 className='card-title'>Card title</h5>
                    <p className='card-text'>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" class="card-link">Card link</a>
                    <a href="#" class="card-link">Another link</a>
                </div>
            </div>

            </div>
            {/* application image */}
            {/* title of project */}
            {/* link to deployed application */}
            {/* link to github repo */}
        </section>
    )
};

export default Portfolio;