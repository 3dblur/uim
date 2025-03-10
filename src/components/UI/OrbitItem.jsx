import React from 'react';

const OrbitItem = ({ icon, label, position }) => {
  // Calculate CSS variables for positioning
  const getPositionStyle = () => {
    switch (position) {
      case 'top':
        return { top: 0, left: '45%', '--translate-y': '-40%' };
      case 'right':
        return { top: '45%', right: 0, '--translate-x': '40%' };
      case 'bottom':
        return { bottom: 0, left: '45%', '--translate-y': '40%' };
      case 'left':
        return { top: '45%', left: 0, '--translate-x': '-40%' };
      default:
        return {};
    }
  };

  return (
    <div className="orbit-item" style={getPositionStyle()}>
      <img src={`/api/placeholder/48/48`} alt={label} />
      <span>{label}</span>
    </div>
  );
};

export default OrbitItem;