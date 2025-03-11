import React from 'react';

const OrbitItem = ({ icon, label, position, active, onHover, onLeave }) => {
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
    <div 
    className={`orbit-item ${position} ${active ? 'active' : ''}`}
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <span className="orbit-item-label">{label}</span>
  </div>
    
    
  );
};

export default OrbitItem;