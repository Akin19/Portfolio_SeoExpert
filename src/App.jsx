import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Page/home/Home";
import About from "./Page/about/About";
import Portfolio from "./Page/portfolio/Portfolio";
import Contact from "./Page/contact/Contact";

import "./App.css";
import Testimonial from "./Page/testimonial/Testimonial";
import Footer from "./components/Footer";
const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </BrowserRouter>
    // <BrowserRouter>
    //   <Navbar />
    //   {/* Test  */}
    //   {/* <Home />
    //   <About />
    //   <Portfolio />
    //   <Contact /> */}
    //   <Routes>
    //     <Route index element={<Home />} />
    //     <Route path="about" element={<About />} />
    //     <Route path="portfolio" element={<Portfolio />} />
    //     <Route path="contact" element={<Contact />} />
    //     <Route path="testimonial" element={<Testimonial />} />
    //   </Routes>
    // </BrowserRouter>
  );
};

export default App;
