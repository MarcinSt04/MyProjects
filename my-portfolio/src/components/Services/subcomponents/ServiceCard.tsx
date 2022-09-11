interface ServicesProps {
  name: string;
  logo: string;
  description: string;
}

const ServiceCard: React.FC<ServicesProps> = ({ name, logo, description }) => {
  return (
    <div className='service' key={name}>
      <img src={logo} alt='obraz usługi' />
      <span className='service-name'>{name}</span>
      <span>{description}</span>
    </div>
  );
};

export default ServiceCard;
