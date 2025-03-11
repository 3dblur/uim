import React, { useRef, useEffect } from 'react';
import Landing from './components/Sections/Landing';
import Explore from './components/Sections/Explore';
import Featured from './components/Sections/Featured';
import Detail from './components/Sections/Detail';
import Menu from './components/Layout/Menu';
import ScrollIndicator from './components/Layout/ScrollIndicator';
import Button from './components/UI/Button';
import useScrollSpy from './hooks/useScrollSpy';


const App = () => {
  const scrollContainerRef = useRef(null);
  const sections = ['landing', 'explore', 'featured', 'detail'];
  const activeSection = useScrollSpy(sections, scrollContainerRef);

  const handleSectionChange = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section && scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: section.offsetLeft,
        behavior: 'smooth'
      });
    }
  };

  // Ensure all sections are present and properly referenced
  useEffect(() => {
    // Check if all sections are in the DOM
    const allSectionsExist = sections.every(id => document.getElementById(id));
    if (!allSectionsExist) {
      console.warn('Not all sections found in the DOM');
    }
  }, [sections]);

  return (
    <>
      <Menu 
        sections={sections} 
        activeSection={activeSection} 
        onSectionChange={handleSectionChange} 
      />
      
      <div className="floating-action">
        <Button>Menu</Button>
      </div>
      
      <ScrollIndicator />
      
      <div className="horizontal-scroll" ref={scrollContainerRef}>
        <Landing />
        <Explore />
        <Featured />
        <Detail />
      </div>
    </>
  );
};

export default App;