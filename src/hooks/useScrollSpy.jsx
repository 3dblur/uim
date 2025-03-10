import { useState, useEffect } from 'react';

const useScrollSpy = (sectionIds, scrollContainerRef) => {
  const [activeSection, setActiveSection] = useState(sectionIds[0]);

  useEffect(() => {
    if (!scrollContainerRef.current) return;
    
    const handleScroll = () => {
      const container = scrollContainerRef.current;
      const scrollPos = container.scrollLeft;
      const windowWidth = window.innerWidth;
      
      // Get all section elements
      const sectionElements = sectionIds.map(id => document.getElementById(id));
      
      // Find which section is currently in view
      for (let i = 0; i < sectionElements.length; i++) {
        const section = sectionElements[i];
        const sectionLeft = section.offsetLeft;
        const sectionRight = sectionLeft + section.offsetWidth;
        
        if (scrollPos >= sectionLeft - windowWidth/2 && 
            scrollPos < sectionRight - windowWidth/2) {
          setActiveSection(sectionIds[i]);
          break;
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener('scroll', handleScroll);
    
    return () => {
      scrollContainer.removeEventListener('scroll', handleScroll);
    };
  }, [scrollContainerRef, sectionIds]);

  return activeSection;
};

export default useScrollSpy;