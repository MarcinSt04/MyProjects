import * as React from 'react';
import { Link } from 'react-router-dom';

interface PortfolioProps {
  slug: string;
  name: string;
  logo: string;
  description: string;
}

const PortfolioCard: React.FC<PortfolioProps> = ({
  slug,
  name,
  logo,
  description,
}) => {
  return (
    <Link to={`/${slug}`} key={slug}>
      <div className='portfolio-item'>
        <img src={logo} alt='zdjęcie przedstawiające stronę ...' />
        <div className='portfolio-item-shadow'>
          <span className='portfolio-item-name'>{name}</span>
        </div>
      </div>
    </Link>
  );
};

export default PortfolioCard;
