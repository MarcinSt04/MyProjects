import * as React from 'react';
import './Services.scss';
import services from '../../config/services';
import ServiceCard from './subcomponents/ServiceCard';

const Services: React.FC = () => {
  return (
    <section className='services'>
      <div className='title'>
        <h3>Usługi</h3>
        <div className='underline'></div>
        <div className='content'>
          {services.map(service => (
            <ServiceCard
              name={service.name}
              logo={service.logo}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
