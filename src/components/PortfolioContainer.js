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
                    path='/portfolio-react-router'
                    element={<About />}
                />
                {/* About */}
                <Route
                    path='portfolio-react-router/about'
                    element={<About />}
                />
                {/* Portfolio */}
                <Route
                    path="portfolio-react-router/portfolio"
                    element={<Portfolio />}
                />
                {/* Contact */}
                <Route
                    path="portfolio-react-router/contact"
                    element={<Contact />}
                />
                {/* Resume */}
                <Route
                    path="portfolio-react-router/resume"
                    element={<Resume />}
                />
                {/* Cycling */}
                <Route
                    path="portfolio-react-router/cycling"
                    element={<Cycling />}
                />
            </Routes>
        </Router>

        <Footer />
        </div>
    )

};

export default PortfolioContainer;