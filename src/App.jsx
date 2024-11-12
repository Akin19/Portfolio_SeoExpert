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
    <div>
      <Navbar />
      <Home />
      <About />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
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
