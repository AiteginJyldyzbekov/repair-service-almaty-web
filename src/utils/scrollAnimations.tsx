
import { useEffect } from 'react';

export const useScrollAnimation = () => {
  useEffect(() => {
    const revealElements = () => {
      const elements = document.querySelectorAll(".reveal");
      
      elements.forEach((element) => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("active");
        }
      });
    };
    
    // Run once on first load
    setTimeout(revealElements, 300);
    
    // Add listener for scroll events
    window.addEventListener("scroll", revealElements);
    
    // Clean up event listener
    return () => window.removeEventListener("scroll", revealElements);
  }, []);
};

export default useScrollAnimation;
