// // // import "./Navbar.css";

// // // import { links } from "../data";

// // // // import { NavLink } from "react-router-dom";
// // // import { HashLink } from "react-router-hash-link";
// // // import { useState } from "react";

// // // const Navbar = () => {
// // //   const [showMenu, setShowmenu] = useState(false);
// // //   return (
// // //     <nav className="nav">
// // //       <div className={`${showMenu ? " nav__menu show-menu" : "nav__menu"}`}>
// // //         <ul className="nav__list">
// // //           {links.map(({ name, icon, link }, index) => {
// // //             return (
// // //               <li key={index} className="nav__item">
// // //                 <HashLink
// // //                   smooth
// // //                   to={link}
// // //                   className={({ isActive }) =>
// // //                     isActive ? "nav__link active-nav " : "nav__link"
// // //                   }
// // //                   onClick={() => setShowmenu(!showMenu)}
// // //                 >
// // //                   {icon}
// // //                   <h3 className="nav__name">{name}</h3>
// // //                 </HashLink>

// // //                 {/*
// // //                   <NavLink
// // //                     className={({ isActive }) =>
// // //                       isActive ? "nav__link active-nav " : "nav__link"
// // //                     }
// // //                     onClick={() => setShowmenu(!showMenu)}
// // //                   >
// // //                     {icon}
// // //                     <h3 className="nav__name">{name}</h3>
// // //                   </NavLink>
// // //                  */}
// // //               </li>
// // //             );
// // //           })}
// // //         </ul>
// // //       </div>

// // //       <div
// // //         className={`${
// // //           showMenu ? " nav__toggle animate-toggle" : "nav__toggle"
// // //         }`}
// // //         onClick={() => setShowmenu(!showMenu)}
// // //       >
// // //         <span></span>
// // //         <span></span>
// // //         <span></span>
// // //       </div>
// // //     </nav>
// // //   );
// // // };

// // // export default Navbar;

// import { links } from "../data";
// import "./Navbar.css";
// import { useState } from "react";
// import { HashLink } from "react-router-hash-link";
// import { useEffect } from "react"; // Import useEffect

// const Navbar = () => {
//   const [showMenu, setShowMenu] = useState(false);
//   const [activeLink, setActiveLink] = useState(null);

//   useEffect(() => {
//     // Select each section based on the IDs in your `links` data
//     const sections = links.map((link) =>
//       document.getElementById(link.link.replace("#", ""))
//     );

//     // Define the observer
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             setActiveLink(`#${entry.target.id}`);
//           }
//         });
//       },
//       { threshold: 0.6 } // Trigger when 60% of the section is in view
//     );

//     // Observe each section
//     sections.forEach((section) => {
//       if (section) observer.observe(section);
//     });

//     // Clean up the observer on component unmount
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <nav className="nav">
//       <div className={`${showMenu ? "nav__menu show-menu" : "nav__menu"}`}>
//         <ul className="nav__list">
//           {links.map(({ name, icon, link }, index) => (
//             <li key={index} className="nav__item">
//               <HashLink
//                 smooth
//                 to={link}
//                 className={`nav__link ${
//                   activeLink === link ? "active-nav" : ""
//                 }`}
//                 onClick={() => setShowMenu(!showMenu)}
//               >
//                 {icon}
//                 <h3 className="nav__name">{name}</h3>
//               </HashLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//       <div
//         className={`nav__toggle ${showMenu ? "animate-toggle" : ""}`}
//         onClick={() => setShowMenu(!showMenu)}
//       >
//         <span></span>
//         <span></span>
//         <span></span>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { HashLink } from "react-router-hash-link";
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
              <HashLink
                smooth
                to={link}
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
              </HashLink>
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
