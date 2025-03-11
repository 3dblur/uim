import React from 'react';
import GridItem from '../UI/GridItem';

const Featured = () => {
  const items = [
    {
      id: 1,
      title: 'Dex',
      subtitle: 'by Grayscale Studio',
      price: 79,
      tags: ['React', 'AI-Enhanced'],
      description: 'A comprehensive dashboard system with 200+ components and 30 screen templates. Ideal for enterprise applications.',
      featured: true
    },
    {
      id: 2,
      title: 'Minimal Social-fi App',
      subtitle: 'by UI Engineers',
      price: 49,
      tags: ['React', 'AI-Enhanced']
    },
    {
      id: 3,
      title: 'DeFAi',
      subtitle: 'by Gray Matter',
      price: 59,
      tags: ['React']
    },
    {
      id: 4,
      title: 'Opinion Trading Market',
      subtitle: 'by Mono Studio',
      price: 39,
      tags: ['Figma']
    },
    {
      id: 5,
      title: 'Yield Farming Protocol',
      subtitle: 'by DesignAI',
      price: 29,
      tags: [ 'AI-Enhanced']
    },
    {
      id: 6,
      title: 'Memecoin Analytics ios',
      subtitle: 'by UX Craft',
      price: 45,
      tags: ['React', 'AI-Enhanced']
    }
  ];

  return (
    <section id="featured" className="section featured">
      <div className="radial-grid">
        {items.map((item) => (
          <GridItem
            key={item.id}
            title={item.title}
            subtitle={item.subtitle}
            price={item.price}
            tags={item.tags}
            description={item.description}
            featured={item.featured}
          />
        ))}
      </div>
    </section>
  );
};

export default Featured;