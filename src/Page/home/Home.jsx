import { FaArrowRight } from "react-icons/fa";

import "./home.css";
import profile from "../../assets/home.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section id="home" className="home section grid flex">
      <img src={profile} alt="" className="home__img" />

      <div className="home__content">
        <div className="home__data">
          <h1 className="home__title">
            <span>I'm Asad Akin.</span> Digital Marketer
          </h1>
          <p className="home__description">
            I am a Digital Marketing and SEO expert focused on crafting clean &
            user-friendly experiences, I am passionate about building excelent
            work that improves the lives of those around me.
          </p>

          {/* <Link to="/about" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </Link> */}

          <a href="#contact" className="button">
            More About Me{" "}
            <span className="button__icon">
              <FaArrowRight />
            </span>
          </a>
        </div>
      </div>

      <div className="color__block "></div>
    </section>
  );
};

export default Home;
