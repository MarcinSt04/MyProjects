import * as React from 'react';
import './AboutMe.scss';
import aboutMeData from '../../config/aboutme';
import { MdAlternateEmail } from 'react-icons/md';
import { BsFillPhoneFill } from 'react-icons/bs';

const AboutMe: React.FC = () => {
  return (
    <section className='about-me'>
      <div className='title'>
        <h3>O mnie</h3>
        <div className='underline'></div>
      </div>
      <div className='content'>
        <div className='photo'>
          <img
            src='https://files.fm/thumb_show.php?i=dwdzraeep'
            alt='Moje zdjęcie'
          />
        </div>
        <div className='info'>
          <div className='info-label'>
            <MdAlternateEmail />
            <a href='mailto: mstepien.kontakt@gmail.com'>{aboutMeData.email}</a>
          </div>
          <div className='info-label'>
            <BsFillPhoneFill />
            <a href='tel:+48574430689'>+48 {aboutMeData.phoneNumber}</a>
          </div>
          <div className='info-description'>
            <p>{aboutMeData.description}</p>
          </div>
          <div className='info-cv'>
            <a href='../../../public/data/CV.pdf' download>
              {/**DO NAPRAWY */}
              <button className='btn-fill'>Pobierz CV</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
