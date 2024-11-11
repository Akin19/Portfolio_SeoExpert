import { skills } from "../data";

// import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressBar from "./AnimatedProgressBar";
const Skills = () => {
  return (
    <>
      {skills.map(({ title, percentage }, index) => {
        return (
          <div className="progress__box" key={index}>
            {/* <div className="progress__circle">
              <CircularProgressbar
                strokeWidth={7.5}
                value={percentage}
                text={`${percentage}%`}
              />
            </div>
            <h3 className="skills__title">{title}</h3> */}

            <AnimatedProgressBar
              key={index}
              title={title}
              targetPercentage={percentage}
            />
          </div>
        );
      })}
    </>
  );
};

export default Skills;
