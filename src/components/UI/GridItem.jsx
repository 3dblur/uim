import React from 'react';

const GridItem = ({ 
  title, 
  subtitle, 
  price, 
  tags = [], 
  description,
  featured = false,
  onClick 
}) => {
  return (
    <div className={`grid-item ${featured ? 'featured-item' : ''}`} onClick={onClick}>
      <div className="grid-item-content">
        <h3 className="grid-item-title">{title}</h3>
        <p className="grid-item-subtitle">{subtitle}</p>
        <div className="grid-item-image">
          <img 
            src={`/api/placeholder/${featured ? '300/140' : '200/100'}`} 
            alt={`${title} UI Preview`} 
          />
        </div>
        {description && <p>{description}</p>}
        <div className="grid-item-footer">
          <div className="grid-item-price">${price}</div>
          <div className="grid-item-tags">
            {tags.map((tag, index) => (
              <span key={index} className="grid-item-tag">{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridItem;