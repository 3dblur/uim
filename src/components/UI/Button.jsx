import React from 'react';

const Button = ({ children, primary, onClick }) => {
  return (
    <button 
      className={`ios-button ${primary ? 'primary' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;