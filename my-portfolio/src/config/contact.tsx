import { FaMapMarkerAlt } from 'react-icons/fa';
import { MdAlternateEmail } from 'react-icons/md';
import { BsFillPhoneFill } from 'react-icons/bs';

interface contactInterface {
  item: string;
  icon: unknown;
}

const contactData: contactInterface[] = [
  {
    item: 'Leżajsk',
    icon: <FaMapMarkerAlt />,
  },
  {
    item: 'mstepien.kontakt@gmail.com',
    icon: <MdAlternateEmail />,
  },
  {
    item: '+48 574 430 689',
    icon: <BsFillPhoneFill />,
  },
];
export default contactData;
