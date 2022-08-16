import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./GlobalStyles";

// Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

function App() {
  const [show, setShow] = useState(true);
  const [scrollHeight, setScrollHeight] = useState(
    document.documentElement.scrollTop
  );

  // For Navbar
  useEffect(() => {
    window.addEventListener("scroll", () =>
      setScrollHeight(document.documentElement.scrollTop)
    );
  }, [scrollHeight]);

  return (
    <>
      <GlobalStyles />
        {scrollHeight > 15 ? (
          <Navbar show={show} setShow={setShow} scrollHeight={scrollHeight} />
        ) : null}
        <Header windowHeight={scrollHeight} />
        <About />
        <Education />
        <Skills />
        <Portfolio />
        <Contact />
    </>
  );
}

export default App;
