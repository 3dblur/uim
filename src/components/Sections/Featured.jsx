import React from 'react';
import GridItem from '../UI/GridItem';

const Featured = () => {
  const items = [
    {
      id: 1,
      title: 'Enterprise Dashboard Suite',
      subtitle: 'by Grayscale Studio',
      price: 79,
      tags: ['React', 'AI-Enhanced'],
      description: 'A comprehensive dashboard system with 200+ components and 30 screen templates. Ideal for enterprise applications.',
      featured: true
    },
    {
      id: 2,
      title: 'Minimal Analytics',
      subtitle: 'by UI Engineers',
      price: 49,
      tags: ['Vue']
    },
    {
      id: 3,
      title: 'E-commerce Kit',
      subtitle: 'by Gray Matter',
      price: 59,
      tags: ['React']
    },
    {
      id: 4,
      title: 'Finance App UI',
      subtitle: 'by Mono Studio',
      price: 39,
      tags: ['Figma']
    },
    {
      id: 5,
      title: 'Portfolio Template',
      subtitle: 'by DesignAI',
      price: 29,
      tags: ['HTML/CSS']
    },
    {
      id: 6,
      title: 'Task Manager',
      subtitle: 'by UX Craft',
      price: 45,
      tags: ['Angular']
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