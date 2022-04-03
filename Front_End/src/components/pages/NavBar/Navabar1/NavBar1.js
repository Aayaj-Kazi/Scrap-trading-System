import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '../../../Session/Session';
import './NavBar1.css';
import Dropdown from 'react-bootstrap/Dropdown';
import Logout from './../../Logout/Logout';




function NavBar1() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const { value, setValue } = useContext(UserContext)
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
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/CustHome' className='navbar-logo' onClick={closeMobileMenu}>
          {value.data.firstName }
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/Sellcar' className='nav-links' onClick={closeMobileMenu}>
                Sell Car
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Buycar'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Buy Car
              </Link>
            </li>

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
                        <Dropdown.Item>
                          <Link to='/EditProfile' onClick={closeMobileMenu}>
                            Edit Profile
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item>
                          <Link to='/getmycars' onClick={closeMobileMenu}>
                            List My Car
                          </Link>
                        </Dropdown.Item>
                        <Dropdown.Item >
                          <Link to='#' onClick={closeMobileMenu}>
                            Settings
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
    </>
  );
}

export default NavBar1;