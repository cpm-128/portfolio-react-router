import React, { useState } from 'react';
import { allUpper } from '../../utils/helpers';
//import image from '../../assets/images/cycling'

function Cycling() {

    const [events] = useState([
        {
            title: 'Asheville Off Road Series',
            type: 'Gravel Race',
            image: require('../../assets/images/cycling/aors_2022.jpg'),
            result: '3rd Place Womens Overall, 1st Place Age Group',
            miles: '42',
            feetClimbing: '3,400',
            hours: '2',
            minutes: '39',
            results: 'https://results.raceroster.com/v2/en-US/results/d4gwk7qpfahdf396/results?subEvent=122275&page=1&genderSexId=36eda1e6-c9ff-4038-802d-2b4b178c7753',
        },
    ])

    return (
        <section className='padding-standard padding-leftright'>

            <h2 className='padding-top-20px'>RACE RESULTS</h2>

            {/* flex parent container */}
            <div className='d-flex flex-row flex-wrap align-self-stretch col-12'>

                {/* flex children, event cards */}
                {events.map((event, i) => (
                <div className='card p-2 col-12 col-md-4' style={{width: '18rem'}}>
                    <div>
                        <img
                            className='card-img-top'
                            src={event.image}
                            alt={`${event.title}`}
                            key={event.title}
                        />
                        <div className='card-body'>
                            <h4 className='card-title'>{event.title}</h4>
                            <h6>{allUpper(event.type)}</h6>
                            <p className='card-text'>{event.result}</p>
                            <ul className='font-size-p light-font-weight'>
                                <li>{event.miles} miles</li>
                                <li>{event.feetClimbing} feet climbing</li>
                                <li>{event.hours} hours, {event.minutes} minutes</li>
                            </ul>
                            <a href={event.results} className='card-link' target='_blank' rel='noopener noreferrer'>Race Results</a>
                        </div>
                    </div>
                </div>
                ))}

            </div>

        </section>
    )
};

export default Cycling;