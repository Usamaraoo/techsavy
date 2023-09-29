import React, { useState, useEffect } from 'react';
import { useSpring, animated } from 'react-spring';

const GigitCount = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [count, setCount] = useState(1);

  // Set up a spring animation for the count
  const countSpring = useSpring({
    number: isVisible ? 68 : 1,
    from: { number: 1 },
    config: { duration: 3000 }, // Animation duration (adjust as needed)
  });

  useEffect(() => {
    const section = document.getElementById('animation-section');

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the section is in the viewport, set it as visible
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.7 } // Adjust the threshold as needed
    );

    observer.observe(section);

    // Clean up the observer when the component unmounts
    return () => {
      observer.unobserve(section);
    };
  }, []);

  // Update the count when isVisible changes
  useEffect(() => {
    if (isVisible) {
      setCount(68);
    }
  }, [isVisible]);

  return (
    <section id="animation-section">
      <animated.div id="animated-digit">
        {countSpring.number.interpolate((number) => Math.floor(number))}
      </animated.div>
    </section>
  );
};

export default GigitCount;
