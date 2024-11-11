import "./Footer.css";
import { links } from "../data";
const Footer = () => {
  return (
    <main className="footer">
      <ul className="footer__list">
        {links.map(({ icon, link }, index) => (
          <li key={index} className="footer__link">
            <a href={link}>
              {icon}
              {/* <h3 className="nav__name">{name}</h3> */}
            </a>
          </li>
        ))}
      </ul>
      <p className="footer__desc">All Rights Reserved @Asaduzzaman Akin</p>
    </main>
  );
};

export default Footer;
