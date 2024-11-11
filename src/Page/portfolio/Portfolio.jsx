// import "./Portfolio.css";
// import { portfolioData } from "../../data";
// import PortfolioItem from "../../components/PortfolioItem";
// import { useState } from "react";
// const Portfolio = () => {
//   const [category, setcategory] = useState("all");
//   return (
//     <section className="portfolio section">
//       <h2 className="section__title">
//         My <span>Portfolio</span>
//       </h2>
//       <div className="button__container">
//         <button
//           className="portfolio__button"
//           onClick={() => setcategory("all")}
//         >
//           All
//         </button>
//         <button
//           className="portfolio__button"
//           onClick={() => setcategory("digitalMarketing")}
//         >
//           Digital Marketing
//         </button>
//         <button
//           className="portfolio__button"
//           onClick={() => setcategory("thumbnailDesign")}
//         >
//           Thumbnail Design
//         </button>
//         <button
//           className="portfolio__button"
//           onClick={() => setcategory("graphicsDesign")}
//         >
//           Graphics Design
//         </button>
//         <button
//           className="portfolio__button"
//           onClick={() => setcategory("seo")}
//         >
//           SEO
//         </button>
//       </div>

//       <div className="portfolio__container container grid grid__gap">
//         {portfolioData
//           .filter((item) => category === "all" || category === item.category) // Filter items based on category
//           .map((item) => (
//             <PortfolioItem key={item.id} {...item} />
//           ))}
//       </div>
//     </section>
//   );
// };

// export default Portfolio;

import "./Portfolio.css";
import { portfolioData } from "../../data";
import PortfolioItem from "../../components/PortfolioItem";
import { useState } from "react";

const Portfolio = () => {
  const [category, setCategory] = useState("all");

  return (
    <section id="portfolio" className="portfolio section">
      <h2 className="section__title">
        My <span>Portfolio</span>
      </h2>
      <div className="button__container">
        <button
          className={`portfolio__button ${category === "all" ? "active" : ""}`}
          onClick={() => setCategory("all")}
        >
          All
        </button>
        <button
          className={`portfolio__button ${
            category === "digitalMarketing" ? "active" : ""
          }`}
          onClick={() => setCategory("digitalMarketing")}
        >
          Digital Marketing
        </button>
        <button
          className={`portfolio__button ${
            category === "thumbnailDesign" ? "active" : ""
          }`}
          onClick={() => setCategory("thumbnailDesign")}
        >
          Thumbnail Design
        </button>
        <button
          className={`portfolio__button ${
            category === "graphicsDesign" ? "active" : ""
          }`}
          onClick={() => setCategory("graphicsDesign")}
        >
          Graphics Design
        </button>
        <button
          className={`portfolio__button ${category === "seo" ? "active" : ""}`}
          onClick={() => setCategory("seo")}
        >
          SEO
        </button>
      </div>

      <div className="portfolio__container container grid grid__gap">
        {portfolioData
          .filter((item) => category === "all" || item.category === category)
          .map((item) => (
            <PortfolioItem category={category} key={item.id} {...item} />
          ))}
      </div>
    </section>
  );
};

export default Portfolio;
