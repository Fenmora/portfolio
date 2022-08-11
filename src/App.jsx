import React from "react";
import Nav from "./components/nav/Nav";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import About from "./components/about/About";
import Testimonial from "./components/testimonial/Testimonial";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Portafolio from "./components/portafolio/Portafolio";
import Services from "./components/Services/Services";
// import "./index.css";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portafolio />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
