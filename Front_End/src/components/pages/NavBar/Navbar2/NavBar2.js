
import React, { useState, useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import './NavBar2.css';


const Navbar2 = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    return (
        <div>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/Adminhome' className='navbar-logo' onClick={closeMobileMenu}>
                        HMDC<i className='fas fa-car' />
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>

                        
                        <li className='nav-item'>
                            <div
                                className='nav-links'
                                onClick={closeMobileMenu}
                            >
                                <div>
                                    <div style={{
                                        display: 'block',
                                    }}>

                                        <Dropdown>
                                            <Dropdown.Toggle variant="success">
                                                Open Menu
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu>
                                                <Dropdown.Item >
                                                    <Link to='/getusers' onClick={closeMobileMenu}>
                                                        Get Users
                                                    </Link>
                                                </Dropdown.Item>
                                                
                                                <Dropdown.Item >
                                                    <Link to='#' onClick={closeMobileMenu}>
                                                        Settings
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item >
                                                    <Link to='/getallmodel' onClick={closeMobileMenu}>
                                                        List Models
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item >
                                                    <Link to='/getallcompany' onClick={closeMobileMenu}>
                                                        List Companies
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item >
                                                    <Link to='/addcompany' onClick={closeMobileMenu}>
                                                        Add Car Company
                                                    </Link>
                                                </Dropdown.Item>
                                                <Dropdown.Item >
                                                    <Link to='/addmodel' onClick={closeMobileMenu}>
                                                        Add Car Model
                                                    </Link>
                                                </Dropdown.Item>
                            
                                                <Dropdown.Item>
                                                    <Link to='/logout' onClick={closeMobileMenu}>
                                                        Logout
                                                    </Link>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navbar2