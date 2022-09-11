interface servicesInterface {
  name: string;
  logo: string;
  description: string;
}

const services: servicesInterface[] = [
  {
    name: 'Projekt strony WWW',
    logo: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_960_720.jpg',
    description: 'Zajmuję się tworzeniem stron internetowych',
  },
  {
    name: "Stworzenie aplikacji web'owej",
    logo: 'https://cdn.pixabay.com/photo/2015/06/24/15/45/code-820275_960_720.jpg',
    description: 'Jestem w stanie stworzyć aplikację internetową',
  },
  {
    name: 'Optymalizacja SEO',
    logo: 'https://cdn.pixabay.com/photo/2015/05/08/14/47/seo-758264_960_720.jpg',
    description:
      'Optymalizuję strony internetowe oraz polepszam ich widoczność w wyszukiwarce',
  },
];

export default services;
