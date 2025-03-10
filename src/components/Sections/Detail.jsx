import React, { useState } from 'react';
import Button from '../UI/Button';
import Thumbnail from '../UI/Thumbnail';

const Detail = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  
  const product = {
    title: 'Enterprise Dashboard Suite',
    creator: 'by Grayscale Studio',
    description: 'A comprehensive dashboard system with 200+ components and 30 screen templates. Perfect for enterprise applications requiring data visualization, user management, and advanced analytics. AI-enhanced for intuitive user experience.',
    tags: ['React', 'AI-Enhanced', 'Enterprise', 'Dashboard'],
    price: 79,
    images: [1, 2, 3, 4] // placeholder for image ids
  };

  return (
    <section id="detail" className="section detail">
      <div className="detail-container">
        <div className="detail-preview">
          <div className="main-preview">
            <img src="/api/placeholder/400/300" alt="UI Preview" />
          </div>
          <div className="thumbnail-container">
            {product.images.map((_, index) => (
              <Thumbnail 
                key={index}
                alt={`Thumbnail ${index + 1}`}
                onClick={() => setSelectedImage(index)}
              />
            ))}
          </div>
        </div>
        <div className="detail-info">
          <h2 className="detail-title">{product.title}</h2>
          <p className="detail-creator">{product.creator}</p>
          <p className="detail-description">{product.description}</p>
          <div className="detail-meta">
            {product.tags.map((tag, index) => (
              <span key={index} className="detail-tag">{tag}</span>
            ))}
          </div>
          <div className="detail-price">${product.price}</div>
          <div className="detail-actions">
            <Button>Preview Demo</Button>
            <Button primary>Purchase Now</Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Detail;
