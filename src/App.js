import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./GlobalStyles";

// Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";

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
    const scrollWidth = document.documentElement.scrollWidth;

    if (scrollWidth < 1024) {
      setShow(false);
    }
    console.log(scrollWidth);
  }, [scrollHeight]);

  return (
    <div>
      <GlobalStyles />
      {scrollHeight > 15 ? (
        <Navbar show={show} setShow={setShow} windowHeight={scrollHeight} />
      ) : null}
      <Header windowHeight={scrollHeight} />
    </div>
  );
}

export default App;
