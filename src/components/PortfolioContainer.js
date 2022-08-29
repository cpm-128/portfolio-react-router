import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer';
import About from './pages/About';
// import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function PortfolioContainer() {

    // set the currentPage to About by default
    // currentPage is changed in the handlePageChange function via props

    const [currentPage, setCurrentPage] = useState('About');

    const Page = () => {
        switch (currentPage) {
            case 'About': return <About />
            // case 'Portfolio': return <Portfolio />
            case 'Contact': return <Contact />
            case 'Resume': return <Resume />
        }
    }

    const handlePageChange = (page) =>setCurrentPage(page);

    return (
        <div>
            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
            <Page />
            <Footer />
        </div>
    )

};

export default PortfolioContainer;