import { useState, useEffect } from "react";

import { links } from "../data";
import "./Navbar.css";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    // Get all sections by their IDs from links
    const sections = links.map(({ link }) =>
      document.getElementById(link.replace("#", ""))
    );

    // Create an IntersectionObserver instance
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(`#${entry.target.id}`); // Update active link
          }
        });
      },
      { threshold: 0.6 } // Adjust threshold as needed
    );

    // Observe each section
    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    // Cleanup observer on unmount
    return () => observer.disconnect();
  }, []);

  return (
    <nav className="nav">
      <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
        <ul className="nav__list">
          {links.map(({ name, icon, link }, index) => (
            <li key={index} className="nav__item">
              <a
                href={link}
                className={`nav__link ${
                  activeLink === link ? "active-nav" : ""
                }`}
                onClick={() => {
                  setShowMenu(!showMenu);
                  setActiveLink(link); // Manually set active link on click
                }}
              >
                {icon}
                <h3 className="nav__name">{name}</h3>
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`nav__toggle ${showMenu ? "animate-toggle" : ""}`}
        onClick={() => setShowMenu(!showMenu)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
