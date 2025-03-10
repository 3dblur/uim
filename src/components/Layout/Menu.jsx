import React from 'react';

const Menu = ({ sections, activeSection, onSectionChange }) => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      onSectionChange(sectionId);
    }
  };

  return (
    <div className="scroll-menu">
      {sections.map((sectionId) => (
        <div 
          key={sectionId}
          className={`menu-dot ${activeSection === sectionId ? 'active' : ''}`}
          onClick={() => scrollToSection(sectionId)}
          data-section={sectionId}
        />
      ))}
    </div>
  );
};

export default Menu;