import CarRentalImg from '../img/carrental.png';
import IKosmosImg from '../img/ikosmos.png';
import EldaTransImg from '../img/eldatrans.png';

interface portfolioInterface {
  slug: string;
  name: string;
  img: string;
  description: string;
  category: string;
  URLaddress: string;
}

const portfolioItems: portfolioInterface[] = [
  {
    slug: 'ikosmos',
    name: 'iKosmos - ciekawostki o kosmosie',
    img: IKosmosImg,
    description:
      'iKosmos była pierwszą stroną internetową, którą umieściłem w sieci. Prace nad nią zajęły mi kilka dni, natomiast poprawki były wprowadzane przez kilka kolejnych tygodni. iKosmos jest witryną szczególnie dla osób interesujących się kosmosem - prezentuje podstawową wiedzę z tego zakresu.',
    category: 'websites',
    URLaddress: 'http://i-kosmos.pl/',
  },
  {
    slug: 'eldatrans',
    name: 'EldaTrans',
    img: EldaTransImg,
    description:
      'Strona internetowa firmy EldaTrans - zajmującej się przewozem osób - była moim pierwszym płatnym zleceniem.',
    category: 'websites',
    URLaddress: 'http://elda-trans.eu/',
  },
  {
    slug: 'carrental',
    name: 'CarRental',
    img: CarRentalImg,
    description:
      "CarRental to aplikacja React'owa nad którą pracowałem w czasie praktyk wakacyjnych razem z kolegą z klasy. Na prace nad tą aplikacją poświęciłem dwa miesiące.",
    category: 'applications',
    URLaddress: 'https://carrental.academy.st.cetuspro.com/',
  },
];

export default portfolioItems;
