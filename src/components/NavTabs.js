import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
        <nav>

        <ul className='nav nav-tabs bg-color-primary'>

            {/* ABOUT */}
            <li className='nav-item'>
                <a href='/about'
                    onClick={() => handlePageChange('About')}
                    className={currentPage === 'About'
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                >
                    About
                </a>
            </li>

            {/* PORTFOLIO */}
            <li className='nav-item'>
                <a href='/portfolio'
                    onClick={() => handlePageChange('Portfolio')}
                    className={currentPage === 'Portfolio'
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                >
                    Portfolio
                </a>
            </li>

            {/* CONTACT */}
            <li className='nav-item'>
                <a href='/contact'
                    onClick={() => handlePageChange('Contact')}
                    className={currentPage === 'Contact'
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                >
                    Contact
                </a>
            </li>

            {/* RESUME */}
            <li className='nav-item'>
                <a href='/resume'
                    onClick={() => handlePageChange('Resume')}
                    className={currentPage === 'Resume'
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                >
                    Resume
                </a>
            </li>

            {/* CYCLING */}
            <li className='nav-item'>
                <a href='/cycling'
                    onClick={() => handlePageChange('Cycling')}
                    className={currentPage === 'Cycling'
                        ? 'nav-link active'
                        : 'nav-link'
                    }
                >
                    Cycling
                </a>
            </li>

        </ul>

        </nav>
    )
};

export default NavTabs;