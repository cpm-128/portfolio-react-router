import React, { useState } from 'react';
import Races from '../Races.js';
import CyclingHero from '../CyclingHero.js';
import CyclingSocial from '../CyclingSocial.js';

function Cycling() {

    return (
        <div>
            <CyclingHero />
            <CyclingSocial />
            <Races />
        </div>
    )
};

export default Cycling;