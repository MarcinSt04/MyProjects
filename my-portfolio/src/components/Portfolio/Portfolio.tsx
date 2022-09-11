import React, { useState } from 'react';
import './Portfolio.scss';
import portfolioItems from '../../config/portfolio';
import PortfolioCard from './subcomponents/PortfolioCard';

interface filteredItemsState {
  slug: string;
  name: string;
  img: string;
  description: string;
  category: string;
  URLaddress: string;
}

const Portfolio: React.FC = () => {
  const [activeButton, setActiveButton] = useState<
    'all' | 'applications' | 'websites'
  >('all');
  const [filteredItems, setFilteredItems] =
    useState<filteredItemsState[]>(portfolioItems);

  const handleFiltering = (category: 'all' | 'applications' | 'websites') => {
    if (category === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      let result = portfolioItems.filter(item => item.category === category);
      setFilteredItems(result);
    }
    setActiveButton(category);
  };

  return (
    <section className='portfolio'>
      <div className='title'>
        <h3>Portfolio</h3>
        <div className='underline'></div>
      </div>
      <div className='content'>
        <div className='filtering'>
          <button
            className={activeButton === 'all' ? 'btn-fill' : 'btn-empty'}
            onClick={() => handleFiltering('all')}
          >
            Wszystko
          </button>
          <button
            className={activeButton === 'websites' ? 'btn-fill' : 'btn-empty'}
            onClick={() => handleFiltering('websites')}
          >
            Strony WWW
          </button>
          <button
            className={
              activeButton === 'applications' ? 'btn-fill' : 'btn-empty'
            }
            onClick={() => handleFiltering('applications')}
          >
            Aplikacje
          </button>
        </div>
        <div className='portfolio-items'>
          {filteredItems.map(({ name, img, description, slug }) => (
            <PortfolioCard
              slug={slug}
              name={name}
              logo={img}
              description={description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
