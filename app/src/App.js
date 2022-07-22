// Components
import React, { useState, useEffect } from 'react';
import Header from './components/Header'
import Navbar from './components/Navbar'


function App () {
  const [show, setShow] = useState(true);
  const [scrollHeight, setScrollHeight] = useState(document.documentElement.scrollTop);

  useEffect(() => {
    window.addEventListener("scroll", () => setScrollHeight(document.documentElement.scrollTop));
  },[]);

  return (
    <div>
      {
        scrollHeight > 15 ?
          <Navbar 
            show={show} 
            setShow={setShow} 
            windowHeight={scrollHeight}
          /> : null
      }
      <Header windowHeight={scrollHeight}/>
      <Header windowHeight={scrollHeight}/>
    </div>
  )
}

export default App;