import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import portfolioItems from '../../config/portfolio';

const Project: React.FC = () => {
  const { projectSlug } = useParams();

  const [thisProject, setThisProject] = useState<{
    slug: string;
    name: string;
    img: string;
    description: string;
    category: string;
    URLaddress: string;
  }>();

  useEffect(() => {
    let result = portfolioItems.find(item => item.slug === projectSlug);
    setThisProject(result);
  }, []);

  return <div>{thisProject?.name}</div>;
};

export default Project;
