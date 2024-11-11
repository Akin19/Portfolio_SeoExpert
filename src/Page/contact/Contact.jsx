import "./Contact.css";
import { FaEnvelopeOpen, FaWhatsapp } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";

import { FiSend } from "react-icons/fi";

// import {
//   FaEnvelopeOpen,
//   FaPhoneSquareAlt,
//   FaFacebookF,
//   FaTwitter,
//   Fayoutube,
//   FaDribble,
// } from "react-icons/fa";

// import { FiSend } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="contact section">
      <h2 className="section__title">
        Get In <span>Touch</span>
      </h2>

      <div className="contact__container container grid">
        <div className="contact__data">
          <h3 className="contact__title">
            Message <span>Me At</span>{" "}
          </h3>
          <p className="contact__description">
            Feel free to get in touch with me. I am always open to discussing
            new projects, creative ideas or opportunities to be part of your
            visions.
          </p>

          <div className="contact__info">
            <div className="info__item">
              <FaEnvelopeOpen className="info__icon" />
              <div>
                <a href="mailto:gmasad.swe@gmail.com" target="_blank">
                  <span className="info__title">Mail me</span>
                  <h4 className="info__desc">gmasad.swe@gmail.com</h4>
                </a>
              </div>
            </div>
            {/*  */}
            <div className="info__item">
              <FaPhoneSquareAlt className="info__icon" />
              <div>
                <a
                  href="https://api.whatsapp.com/send?phone=+8801765042763"
                  target="_blank"
                >
                  <span className="info__title">Call me on whatsapp</span>
                  <h4 className="info__desc">01765042763</h4>
                </a>
              </div>
            </div>

            {/*  */}

            <div className="contact__socials">
              <a
                href="https://www.linkedin.com/in/asadujjamanakin/"
                className="contact__social-link"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.linkedin.com/in/asadujjamanakin/"
                className="contact__social-link"
              >
                <FaTwitter />
              </a>

              <a
                href="https://www.linkedin.com/in/asadujjamanakin/"
                className="contact__social-link"
              >
                <FaInstagramSquare />
              </a>
              <a
                href="https://www.linkedin.com/in/asadujjamanakin/"
                className="contact__social-link"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.linkedin.com/in/asadujjamanakin/"
                className="contact__social-link"
              >
                <FaWhatsappSquare />
              </a>
            </div>
          </div>
        </div>

        {/*  */}

        <form action="" className="contact__form">
          <h3 className="contact__title">
            Any <span>Question ?</span>{" "}
          </h3>
          <div className="form__input-group">
            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Name"
                className="form__control"
              />
            </div>
            {/*  */}

            <div className="form__input-div">
              <input
                type="email"
                placeholder="Your Email"
                className="form__control"
              />
            </div>
            {/*  */}

            <div className="form__input-div">
              <input
                type="text"
                placeholder="Your Subject"
                className="form__control"
              />
            </div>
          </div>

          <div className="form__input-div">
            <textarea
              placeholder="Your Message"
              className="form__control textarea"
            ></textarea>
          </div>

          <button className="button">
            Send Message{" "}
            <span className="button__icon contact__button-icon">
              <FiSend />
            </span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
