import React from 'react';

const Thumbnail = ({ alt = "Thumbnail", onClick }) => {
  return (
    <div className="thumbnail" onClick={onClick}>
      <img src="/api/placeholder/80/80" alt={alt} />
    </div>
  );
};

export default Thumbnail;