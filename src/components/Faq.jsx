import { FiPlus } from "react-icons/fi";
import { FaMinus } from "react-icons/fa";
import "./Faq.css";

const Faq = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className={`faq__item ${isOpen ? "open" : ""}`} onClick={onClick}>
      <div className="faq__title">
        <span>{isOpen ? <FaMinus /> : <FiPlus />}</span>
        <h3 className="resume__subtitle faq__subTitle">{question}</h3>
      </div>
      {isOpen && <p className="resume_description faq_desc">{answer}</p>}
    </div>
  );
};

export default Faq;
