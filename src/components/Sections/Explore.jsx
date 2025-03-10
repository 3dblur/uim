import React from 'react';
import OrbitItem from '../UI/OrbitItem';

const Explore = () => {
  const categories = [
    { id: 'dashboards', label: 'Dashboards', position: 'top' },
    { id: 'mobile', label: 'Mobile Apps', position: 'right' },
    { id: 'ecommerce', label: 'E-commerce', position: 'bottom' },
    { id: 'components', label: 'Component Kits', position: 'left' }
  ];

  return (
    <section id="explore" className="section explore">
      <div className="orbit-container">
        <div className="core">
          <div className="core-text">Explore UI Categories</div>
        </div>
        <div className="orbit"></div>
        {categories.map((category) => (
          <OrbitItem 
            key={category.id}
            icon={category.id}
            label={category.label}
            position={category.position}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;