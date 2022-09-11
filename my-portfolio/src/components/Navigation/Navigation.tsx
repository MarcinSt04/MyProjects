import React, { useEffect } from 'react';
import './Navigation.scss';
import NavLinks from './NavLinks';
import toggleBurger from '../../functions/toggleBurger';
import addBackgroundToNav from '../../functions/addNavBg';
const Navigation: React.FC = () => {
  useEffect(() => {
    addBackgroundToNav();
  }, []);

  return (
    <nav>
      <div className='nav-container'>
        <NavLinks />
        <div className='burger' onClick={toggleBurger}>
          <div className='dash1'></div>
          <div className='dash2'></div>
          <div className='dash3'></div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
