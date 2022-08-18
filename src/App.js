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
  const [scrollHeight, setScrollHeight] = useState(document.documentElement.scrollTop);
  const [showButton, setShowButton] = useState(true);

  // For Navbar
  useEffect(() => {
    window.addEventListener("scroll", () =>
      setScrollHeight(document.documentElement.scrollTop)
    );

    // default navbar close for mobile
    if (window.innerWidth < 1024) {
      window.onload = () => setShow(false);
    }

  }, [scrollHeight]);

  const handleClick = () => {
    setShowButton(!showButton);
  }


  return (
    <>
      <GlobalStyles />
        {scrollHeight > 15 ? (
          <Navbar show={show} setShow={setShow}/>
        ) : null}
        <Header windowHeight={scrollHeight} />
        <About />
        <Education />
        <Skills />
        <Portfolio showButton={showButton} handleClick={handleClick}/>
        <Contact />
    </>
  );
}

export default App;
