import { useState, useEffect, useRef } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AnimatedProgressBar = ({ title, targetPercentage }) => {
  const [percentage, setPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

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

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return; // Only animate when in view

    let progress = 0;
    const increment = targetPercentage / 100;

    const timer = setInterval(() => {
      progress += increment;
      if (progress >= targetPercentage) {
        progress = targetPercentage;
        clearInterval(timer);
      }
      setPercentage(progress);
    }, 20);

    return () => clearInterval(timer);
  }, [isVisible, targetPercentage]);

  return (
    <div className="progress__box" ref={progressRef}>
      <div className="progress__circle">
        <CircularProgressbar
          strokeWidth={7.5}
          value={percentage}
          text={`${Math.round(percentage)}%`}
        />
      </div>
      <h3 className="skills__title">{title}</h3>
    </div>
  );
};

export default AnimatedProgressBar;
