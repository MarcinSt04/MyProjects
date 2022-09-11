import React, { useEffect } from 'react';
import { TypeAnimation } from 'react-type-animation';
import moveBackgroundEffect from '../../functions/moveBackground';
import './Header.scss';

const Header: React.FC = () => {
  useEffect(() => {
    moveBackgroundEffect();
  }, []);

  return (
    <header>
      <div className='hero-img'>
        <div className='hero-shadow'></div>
        <div className='hero-content'>
          <h1>Hi, I'm Marcin</h1>
          <h2>
            I'm{' '}
            <TypeAnimation
              sequence={[
                'Frontend Developer',
                2000,
                'Creator of Applications',
                2000,
                'Creator of Websites',
              ]}
              speed={1}
              wrapper={'span'}
              repeat={Infinity}
            />
          </h2>
        </div>
      </div>
    </header>
  );
};

export default Header;
