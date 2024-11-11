import {
  FaHome,
  FaUser,
  FaFolderOpen,
  FaEnvelopeOpen,
  FaBriefcase,
  FaGraduationCap,
  FaCode,
} from "react-icons/fa";
import { FiFileText, FiUser, FiExternalLink } from "react-icons/fi";
import { MdOutlineReviews } from "react-icons/md";

import Work1 from "./assets/project-1.jpeg";
import Work2 from "./assets/project-2.jpg";
import Work3 from "./assets/project-3.jpeg";
import Work4 from "./assets/project-4.jpeg";
import Work5 from "./assets/project-5.jpg";
import Work6 from "./assets/project-6.jpg";

import Theme1 from "./assets/purple.png";
import Theme2 from "./assets/red.png";
import Theme3 from "./assets/blueviolet.png";
import Theme4 from "./assets/blue.png";
import Theme5 from "./assets/goldenrod.png";
import Theme6 from "./assets/magenta.png";
import Theme7 from "./assets/yellowgreen.png";
import Theme8 from "./assets/orange.png";
import Theme9 from "./assets/green.png";
import Theme10 from "./assets/yellow.png";

// Clients image

import avater1 from "./assets/avatar1.jpg";
import avater2 from "./assets/avatar2.jpg";
import avater3 from "./assets/avatar3.jpg";
import avater4 from "./assets/avatar4.jpg";

// Portfolio images

import graphics1 from "./assets/portfolio/graphics1.jpg";
import graphics2 from "./assets/portfolio/graphics2.jpg";
import graphics3 from "./assets/portfolio/graphics3.jpg";
import graphics4 from "./assets/portfolio/graphics4.jpg";
import graphics5 from "./assets/portfolio/graphics5.jpg";
import graphics6 from "./assets/portfolio/graphics6.jpg";
import graphics7 from "./assets/portfolio/graphics7.jpg";
import graphics8 from "./assets/portfolio/graphics8.jpg";
import graphics9 from "./assets/portfolio/graphics9.jpg";
import graphics10 from "./assets/portfolio/graphics10.jpg";

import seo1 from "./assets/portfolio/seo13.jpg";
import seo2 from "./assets/portfolio/seo14.jpg";
import seo3 from "./assets/portfolio/seo16.jpg";

import seo4 from "./assets/portfolio/seo18.jpg";

import thumbnail1 from "./assets/portfolio/thumbnail1.jpg";
import thumbnail2 from "./assets/portfolio/thumbnail2.jpg";
import thumbnail3 from "./assets/portfolio/thumbnail3.jpg";
import thumbnail4 from "./assets/portfolio/thumbnail4.jpg";
import thumbnail5 from "./assets/portfolio/thumbnail5.jpg";
import thumbnail6 from "./assets/portfolio/thumbnail6.jpg";
import thumbnail7 from "./assets/portfolio/thumbnail7.jpg";
import thumbnail8 from "./assets/portfolio/thumbnail8.jpg";
import thumbnail9 from "./assets/portfolio/thumbnail9.jpg";
import thumbnail10 from "./assets/portfolio/thumbnail10.jpg";

export const links = [
  {
    id: 1,
    name: "Home",
    icon: <FaHome className="nav__icon" />,
    path: "/",
    link: "#home",
  },

  {
    id: 2,
    name: "About",
    icon: <FaUser className="nav__icon" />,
    path: "/about",
    link: "#about",
  },

  {
    id: 3,
    name: "Portfolio",
    icon: <FaFolderOpen className="nav__icon" />,
    path: "/portfolio",
    link: "#portfolio",
  },
  {
    id: 4,
    name: "Testimonial",
    icon: <MdOutlineReviews className="nav__icon" />,
    path: "/testimonial",
    link: "#testimonial",
  },

  {
    id: 5,
    name: "Contact",
    icon: <FaEnvelopeOpen className="nav__icon" />,
    path: "/contact",
    link: "#contact",
  },
];

export const personalInfo = [
  {
    id: 1,
    title: "First Name : ",
    description: "Steve",
  },

  {
    id: 2,
    title: "Last Name : ",
    description: "Milner",
  },

  {
    id: 3,
    title: "Age : ",
    description: "27 Years",
  },

  {
    id: 4,
    title: "Nationality : ",
    description: "Tunisian",
  },

  {
    id: 5,
    title: "Freelance : ",
    description: "Available",
  },

  {
    id: 6,
    title: "Address : ",
    description: "Tunis",
  },

  {
    id: 7,
    title: "Phone : ",
    description: "+21621184010",
  },

  {
    id: 8,
    title: "Email : ",
    description: "you@mail.com",
  },

  {
    id: 9,
    title: "Skype : ",
    description: "steve.milner",
  },

  {
    id: 10,
    title: "Langages : ",
    description: "French, English",
  },
];

export const stats = [
  {
    id: 1,
    no: "12+",
    title: (
      <>
        Completed <br /> Projects
      </>
    ),
  },

  {
    id: 2,
    no: "97+",
    title: (
      <>
        Completed <br /> Projects
      </>
    ),
  },

  {
    id: 3,
    no: "81+",
    title: (
      <>
        Completed <br /> Projects
      </>
    ),
  },

  {
    id: 4,
    no: "53+",
    title: (
      <>
        Completed <br /> Projects
      </>
    ),
  },
];

export const resume = [
  {
    id: 1,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2018 - PRESENT",
    title: "Web Developer <span> Envato </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur tempor incididunt ut labore adipisicing elit,",
  },

  {
    id: 2,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2013 - 2018",
    title: "UI/UX Designer <span> Themeforest </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 3,
    category: "experience",
    icon: <FaBriefcase />,
    year: "2005 - 2013",
    title: "Consultant <span> Videohive </span>",
    desc: "Lorem ipsum dolor sit amet, tempor incididunt ut laboreconsectetur elit, sed do eiusmod tempor duntt",
  },

  {
    id: 4,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2015",
    title: "Engineering Degree <span> Oxford University </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do tempor incididunt ut labore",
  },

  {
    id: 5,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2012",
    title: "Master Degree <span> KIEV University </span>",
    desc: "Lorem incididunt dolor sit amet, consectetur eiusmod dunt doldunt dol elit, tempor incididunt",
  },

  {
    id: 6,
    category: "education",
    icon: <FaGraduationCap />,
    year: "2009",
    title: "Bachelor Degree <span> Tunis High School </span>",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor ut labore",
  },
];

export const skills = [
  {
    id: 1,
    title: "Content Creation",
    percentage: "86",
  },

  {
    id: 2,
    title: "SEO",
    percentage: "99",
  },

  {
    id: 3,
    title: "Google Analytics",
    percentage: "90",
  },

  {
    id: 4,
    title: "Keyword Research",
    percentage: "86",
  },

  {
    id: 5,
    title: "SEM",
    percentage: "95",
  },

  {
    id: 6,
    title: "Google Ads",
    percentage: "90",
  },

  {
    id: 7,
    title: "Thumbnail Design",
    percentage: "95",
  },

  {
    id: 8,
    title: "CRM ",
    percentage: "85",
  },
];

// export const portfolio = [
//   {
//     id: 1,
//     img: Work1,
//     title: "Photo Editing",
//     details: [
//       {
//         icon: <FiFileText />,
//         title: "Project : ",
//         desc: "Photo",
//       },
//       {
//         icon: <FiUser />,
//         title: "Client : ",
//         desc: "Dribble",
//       },
//       {
//         icon: <FaCode />,
//         title: "Language : ",
//         desc: "Adobe Photoshop",
//       },
//       {
//         icon: <FiExternalLink />,
//         title: "Preview : ",
//         desc: "www.dribble.com",
//       },
//     ],
//   },

//   {
//     id: 2,
//     img: Work2,
//     title: "Website Design",
//     details: [
//       {
//         icon: <FiFileText />,
//         title: "Project : ",
//         desc: "Website",
//       },
//       {
//         icon: <FiUser />,
//         title: "Client : ",
//         desc: "Dribble",
//       },
//       {
//         icon: <FaCode />,
//         title: "Language : ",
//         desc: "React JS",
//       },
//       {
//         icon: <FiExternalLink />,
//         title: "Preview : ",
//         desc: "www.dribble.com",
//       },
//     ],
//   },

//   {
//     id: 3,
//     img: Work3,
//     title: "Video Editing",
//     details: [
//       {
//         icon: <FiFileText />,
//         title: "Project : ",
//         desc: "Video",
//       },
//       {
//         icon: <FiUser />,
//         title: "Client : ",
//         desc: "Dribble",
//       },
//       {
//         icon: <FaCode />,
//         title: "Language : ",
//         desc: "Adobe Premium",
//       },
//       {
//         icon: <FiExternalLink />,
//         title: "Preview : ",
//         desc: "www.dribble.com",
//       },
//     ],
//   },

//   {
//     id: 4,
//     img: Work4,
//     title: "Video Editing",
//     details: [
//       {
//         icon: <FiFileText />,
//         title: "Project : ",
//         desc: "Video",
//       },
//       {
//         icon: <FiUser />,
//         title: "Client : ",
//         desc: "Dribble",
//       },
//       {
//         icon: <FaCode />,
//         title: "Language : ",
//         desc: "Adobe Premium",
//       },
//       {
//         icon: <FiExternalLink />,
//         title: "Preview : ",
//         desc: "www.dribble.com",
//       },
//     ],
//   },

//   {
//     id: 5,
//     img: Work5,
//     title: "Landing Page",
//     details: [
//       {
//         title: "Project : ",
//         desc: "Website",
//       },
//       {
//         title: "Client : ",
//         desc: "Dribble",
//       },
//       {
//         title: "Language : ",
//         desc: "React JS, Node JS",
//       },
//       {
//         title: "Preview : ",
//         desc: "www.dribble.com",
//       },
//     ],
//   },

//   {
//     id: 6,
//     img: Work6,
//     title: "Photo Editing",
//     details: [
//       {
//         icon: <FiFileText />,
//         title: "Project : ",
//         desc: "Photo",
//       },
//       {
//         icon: <FiUser />,
//         title: "Client : ",
//         desc: "Dribble",
//       },
//       {
//         icon: <FaCode />,
//         title: "Language : ",
//         desc: "Adobe Photoshop",
//       },
//       {
//         icon: <FiExternalLink />,
//         title: "Preview : ",
//         desc: "www.dibble.com",
//       },
//     ],
//   },
// ];

// Customized Portfolio

export const portfolioData = [
  {
    id: 24,
    img: seo2,
    title: "SEO",
    category: "seo",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 25,
    img: seo3,
    title: "SEO",
    category: "seo",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 26,
    img: seo4,
    title: "SEO",
    category: "seo",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 1,
    img: seo1,
    title: "Youtube SEO",
    category: "seo",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "SEO",
      },
      // {
      //   icon: <FaCode />,
      //   title: "Language : ",
      //   desc: "Adobe Photoshop",
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: "Preview : ",
      //   desc: "www.dribble.com",
      // },
    ],
  },

  {
    id: 2,
    img: thumbnail1,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Thumbnail",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Youtube",
      },
      // {
      //   icon: <FaCode />,
      //   title: "Language : ",
      //   desc: "React JS",
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: "Preview : ",
      //   desc: "www.dribble.com",
      // },
    ],
  },

  {
    id: 3,
    img: graphics1,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Graphics",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Graphics",
      },
      // {
      //   icon: <FaCode />,
      //   title: "Language : ",
      //   desc: "Adobe Premium",
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: "Preview : ",
      //   desc: "www.dribble.com",
      // },
    ],
  },

  {
    id: 4,
    img: graphics2,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Video",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      // {
      //   icon: <FaCode />,
      //   title: "Language : ",
      //   desc: "Adobe Premium",
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: "Preview : ",
      //   desc: "www.dribble.com",
      // },
    ],
  },

  {
    id: 5,
    img: thumbnail10,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        title: "Project : ",
        desc: "Website",
      },
      {
        title: "Client : ",
        desc: "Dribble",
      },
      // {
      //   title: "Language : ",
      //   desc: "React JS, Node JS",
      // },
      // {
      //   title: "Preview : ",
      //   desc: "www.dribble.com",
      // },
    ],
  },

  {
    id: 6,
    img: Work6,
    title: "Photo Editing",
    category: "digitalMarketing",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
      // {
      //   icon: <FaCode />,
      //   title: "Language : ",
      //   desc: "Adobe Photoshop",
      // },
      // {
      //   icon: <FiExternalLink />,
      //   title: "Preview : ",
      //   desc: "www.dibble.com",
      // },
    ],
  },
  {
    id: 7,
    img: thumbnail3,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 8,
    img: thumbnail3,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 9,
    img: thumbnail4,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 10,
    img: thumbnail5,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 11,
    img: thumbnail6,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 12,
    img: thumbnail7,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 13,
    img: thumbnail8,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 14,
    img: thumbnail9,
    title: "Thumbnail Design",
    category: "thumbnailDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 15,
    img: graphics2,
    title: "graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 16,
    img: graphics3,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 17,
    img: graphics4,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 18,
    img: graphics5,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 19,
    img: graphics6,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 20,
    img: graphics7,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 21,
    img: graphics8,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 22,
    img: graphics9,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
  {
    id: 23,
    img: graphics10,
    title: "Graphics Design",
    category: "graphicsDesign",
    details: [
      {
        icon: <FiFileText />,
        title: "Project : ",
        desc: "Photo",
      },
      {
        icon: <FiUser />,
        title: "Client : ",
        desc: "Dribble",
      },
    ],
  },
];

// Customized portfolio ends here

export const themes = [
  {
    id: 1,
    img: Theme1,
    color: "hsl(252, 35%, 51%)",
  },

  {
    id: 2,
    img: Theme2,
    color: "hsl(4, 93%, 54%)",
  },

  {
    id: 3,
    img: Theme3,
    color: "hsl(271, 76%, 53%)",
  },

  {
    id: 4,
    img: Theme4,
    color: "hsl(225, 73%, 57%)",
  },

  {
    id: 5,
    img: Theme5,
    color: "hsl(43, 74%, 49%)",
  },

  {
    id: 6,
    img: Theme6,
    color: "hsl(339, 81%, 66%)",
  },

  {
    id: 7,
    img: Theme7,
    color: "hsl(80, 61%, 50%)",
  },

  {
    id: 8,
    img: Theme8,
    color: "hsl(19, 96%, 52%)",
  },

  {
    id: 9,
    img: Theme9,
    color: "hsl(88, 65%, 43%)",
  },

  {
    id: 10,
    img: Theme10,
    color: "hsl(42, 100%, 50%)",
  },
];

// Faq Data

export const faqData = [
  {
    question:
      " How long does it take to see results from digital marketing efforts?",
    answer:
      "Digital marketing involves promoting products, services, or brands through online channels like search engines, social media, email, and websites. It's essential because it allows businesses to reach a wider audience, engage with customers directly, and measure results to improve marketing strategies.",
  },
  {
    question:
      "What are the key components of a successful digital marketing strategy?",
    answer:
      "A successful digital marketing strategy typically includes SEO (Search Engine Optimization), content marketing, social media marketing, paid advertising, email marketing, and analytics to track and optimize performance. Each component works together to create brand visibility, engagement, and conversion.",
  },
  {
    question: "What is digital marketing, and why is it important?",
    answer:
      "Results can vary depending on the tactics used. For example, SEO can take 3–6 months to show significant improvements, while paid advertising can yield immediate results. Generally, digital marketing is an ongoing effort, with consistent updates and improvements leading to better outcomes over time.",
  },
  {
    question: "How does SEO help in digital marketing?",
    answer:
      "SEO helps increase your website’s visibility on search engines, which drives organic traffic. Optimizing for SEO involves targeting keywords, improving content, enhancing site structure, and building quality backlinks, all of which help your website rank higher in search engine results pages (SERPs).",
  },
  {
    question: "What is the difference between SEO and SEM?",
    answer:
      "SEO (Search Engine Optimization) focuses on improving organic search visibility through unpaid methods, while SEM (Search Engine Marketing) includes paid methods like PPC (Pay-Per-Click) ads to appear in search engine results. Both can be effective, and a combination of both often works well.",
  },
  {
    question: "How does social media marketing benefit my business?",
    answer:
      "Social media marketing helps you connect with your audience, build brand awareness, and drive engagement. It allows for direct interaction with customers and can boost website traffic. Platforms like Facebook, Instagram, LinkedIn, and Twitter are great for building community and trust.",
  },
  {
    question: " Can digital marketing help a local business?",
    answer:
      "Absolutely. Local SEO, Google My Business listings, and targeted social media ads are excellent for reaching local customers. Local digital marketing strategies increase visibility within specific geographic areas, helping local businesses attract nearby customers.",
  },
  {
    question: "What is SEO, and why is it important for my website?",
    answer:
      "SEO, or Search Engine Optimization, is the process of improving your website to increase its visibility in search engines like Google. By optimizing your site for SEO, you attract organic (unpaid) traffic, which can lead to more qualified leads, sales, and overall online presence.",
  },
  {
    question: "What is the difference between on-page and off-page SEO?",
    answer:
      "On-page SEO involves optimizing content and HTML code on your website, including title tags, meta descriptions, headers, and internal links. Off-page SEO refers to actions taken outside your site, like building backlinks from other reputable websites, which help improve your site’s authority.",
  },
  {
    question: "How long does it take to see SEO results?",
    answer:
      "SEO is a long-term strategy, and results usually take between 3 to 6 months to become visible. This timeline can vary depending on factors like industry competition, keyword difficulty, and the quality of your SEO efforts.",
  },
];

// Testimonial starts here

export const clientData = [
  {
    img: avater1,
    name: "Faysal",
    review:
      "On-page SEO involves optimizing content and HTML code on your website,On-page SEO involves optimizing content and HTML code on your website",
  },
  {
    img: avater2,
    name: "Sohan",
    review:
      "On-page SEO involves optimizing content and HTML code on your website,On-page SEO involves optimizing content and HTML code on your website",
  },
  {
    img: avater3,
    name: "Imran",
    review:
      "On-page SEO involves optimizing content and HTML code on your website,On-page SEO involves optimizing content and HTML code on your website",
  },
  {
    img: avater4,
    name: "Robbani",
    review:
      "On-page SEO involves optimizing content and HTML code on your website,On-page SEO involves optimizing content and HTML code on your website",
  },
  {
    img: avater1,
    name: "Akin",
    review:
      "On-page SEO involves optimizing content and HTML code on your website,On-page SEO involves optimizing content and HTML code on your website",
  },
];
