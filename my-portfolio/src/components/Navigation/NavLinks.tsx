import * as React from 'react';
import { useEffect } from 'react';

import navlinks from '../../config/navlinks';
import addActiveClass from '../../functions/addActiveClass';

const NavLinks: React.FC = () => {
  useEffect(() => {
    addActiveClass();
  }, []);

  return (
    <ul className='nav-links'>
      {navlinks.map(link => (
        <li key={link} className='link'>
          {link}
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
