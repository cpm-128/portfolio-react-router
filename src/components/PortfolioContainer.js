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
        <Router>
            <div className='portfolio-container d-flex flex-column min-vh-100'>
                <NavTabs />
                <Header />

                <Routes>
                    {/* index */}
                    <Route
                        path='/'
                        element={<About />}
                    />
                    {/* repo name */}
                    <Route
                        path='/portfolio-react-router'
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

                <Footer />
            </div>
        </Router>
    )

};

export default PortfolioContainer;