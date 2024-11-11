import React, { useState, useEffect, useRef } from "react";

const AnimatedCounter = ({ no, title }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false); // Track visibility
  const counterRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Start animation when visible
          observer.unobserve(entry.target); // Stop observing once triggered
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Only animate when in view

    const numericValue = parseInt(no, 10);
    if (isNaN(numericValue)) return;

    let start = 0;
    const increment = Math.max(1, Math.ceil(numericValue / 100));

    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        start = numericValue;
        clearInterval(timer);
      }
      setCount(start);
    }, 20);

    return () => clearInterval(timer);
  }, [isVisible, no]);

  return (
    <div className="stats__box" ref={counterRef}>
      <h3 className="stats__no">{count === parseInt(no, 10) ? no : count}</h3>
      <p className="stats__title">{title}</p>
    </div>
  );
};
export default AnimatedCounter;
