import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import NavTabs from './NavTabs';
import Header from './Header';
import Footer from './Footer';

import About from './pages/About';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Cycling from './pages/Cycling';

function PortfolioContainer() {

    return (
        <div className='portfolio-container d-flex flex-column min-vh-100'>
        <NavTabs />
        <Header />

        <Router>
            <Routes>
                {/* index */}
                <Route
                    path='/'
                    element={<About />}
                />
                {/* About */}
                <Route
                    path='/about'
                    element={<About />}
                />
                {/* Portfolio */}
                <Route
                    path='/portfolio'
                    element={<Portfolio />}
                />
                {/* Contact */}
                <Route
                    path='/contact'
                    element={<Contact />}
                />
                {/* Resume */}
                <Route
                    path='/resume'
                    element={<Resume />}
                />
                {/* Cycling */}
                <Route
                    path='/cycling'
                    element={<Cycling />}
                />
            </Routes>
        </Router>

        <Footer />
        </div>
    )

};

export default PortfolioContainer;