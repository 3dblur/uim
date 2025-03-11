// src/components/Sections/Explore.jsx
import React, { useState } from 'react';
import OrbitItem from '../UI/OrbitItem';

const Explore = () => {
  const [active, setActive] = useState(null);

  const categories = [
    { id: 'DeFi', label: 'DeFi', position: 'top' },
    { id: 'AI', label: 'AI', position: 'right' },
    { id: 'SocialFi', label: 'SocialFi', position: 'bottom' },
    { id: 'GameFi', label: 'GameFi', position: 'left' }
  ];

  return (
    <section id="explore" className="section explore">
      <div className="orbit-container">
        <div className={`core ${active ? 'active' : ''}`}>
          <div className="core-text">
            {active ? active : 'Explore'}
          </div>
        </div>
        <div className="orbit"></div>
        {categories.map((category) => (
          <OrbitItem 
            key={category.id}
            label={category.label}
            position={category.position}
            active={active === category.label}
            onHover={() => setActive(category.label)}
            onLeave={() => setActive(null)}
          />
        ))}
      </div>
    </section>
  );
};

export default Explore;