import React from 'react';
import { Link } from 'react-router-dom';

// TODO: 1. update <a href>... to <Link to=''></Link> 2. Confirm pathing when live..?
function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav>

        <ul className='nav nav-tabs bg-color-primary'>

            {/* ABOUT */}
            <li className='nav-item'>
                <Link to='/about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About'
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                >
                    About
                </Link>
            </li>

            {/* PORTFOLIO */}
            <li className='nav-item'>
                <Link to='/portfolio-react-router/portfolio'
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio'
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                >
                    Portfolio
                </Link>
            </li>

            {/* CONTACT */}
            <li className='nav-item'>
                <Link to='/portfolio-react-router/contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact'
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                >
                    Contact
                </Link>
            </li>

            {/* RESUME */}
            <li className='nav-item'>
                <Link to='/portfolio-react-router/resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume'
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                >
                    Resume
                </Link>
            </li>

            {/* CYCLING */}
            <li className='nav-item'>
                <Link to='/portfolio-react-router/cycling'
                    onClick={() => handlePageChange('Cycling')}
                    className={currentPage === 'Cycling'
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                >
                    Cycling
                </Link>
            </li>

        </ul>

        </nav>
    )
};

export default NavTabs;