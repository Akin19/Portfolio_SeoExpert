import "./About.css";
import Skills from "../../components/Skills";
import { useState } from "react";
import { FaCloudDownloadAlt } from "react-icons/fa";

import Faq from "../../components/Faq";
import Info from "./Info";
import Stats from "./Stats";
// import { resume } from "../../data";
// import ResumeItem from "../../components/ResumeItem";

import { faqData } from "../../data";

// import { cv } from "../../assets/steve-CV.pdf";

const About = () => {
  const [openIndex, setOpenIndex] = useState(null); // বর্তমানে খোলা FAQ আইটেমের ইনডেক্স

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // একই আইটেম ক্লিক করলে বন্ধ হবে, অন্য আইটেমে গেলে আগেরটি বন্ধ হয়ে নতুনটি খুলবে
  };
  return (
    <main className="section container">
      <section id="about" className="about">
        <h2 className="section__title">
          About <span>Me</span>
        </h2>

        <div className="about__container grid">
          <div className="about__info">
            <h3 className="section__subtitle">Personal Infos</h3>

            <ul className="info__list grid grid__gap">
              <Info />
            </ul>
            <a href="" className="button">
              Download CV{" "}
              <span className="button__icon">
                <FaCloudDownloadAlt />
              </span>
            </a>
          </div>

          <div className="stats grid">
            <Stats />
          </div>
        </div>
      </section>

      {/* +++++++Separator Starts Here */}

      <div className="separator"></div>

      <section className="skills">
        <h3 className="section__subtile subtile__center">My Skills</h3>
        <div className="skills__container grid grid__gap">
          <Skills />
        </div>
      </section>
      {/* +++++++Separator starts here+++++++++++ */}
      {/* <div className="separator"></div> */}
      {/* Resume starts here */}
      {/* <section className="resume">
        <h3 className="section__subtile subtile__center">
          Experience & Education
        </h3>

        <div className="resume__container grid ">
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "experience") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
          <div className="resume__data">
            {resume.map((val) => {
              if (val.category === "education") {
                return <ResumeItem key={val.id} {...val} />;
              }
            })}
          </div>
        </div>
      </section> */}

      {/* Resume Ends Here */}
      <div className="separator"></div>

      {/* FAQ starts Here */}
      <section className="faq">
        <h3 className="section__subtile subtile__center">
          Frequently Asked Question
        </h3>

        <div className="faq__container">
          {faqData.map((item, index) => (
            <Faq
              key={index}
              isOpen={openIndex === index} // ইনডেক্স চেক করে ওপেন অবস্থান নির্ধারণ
              onClick={() => handleToggle(index)}
              {...item}
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default About;
