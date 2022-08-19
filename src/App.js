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
import WorkModal from "./components/WorkModal";

// Data
import projectsData from "./data";

function App() {
  const [show, setShow] = useState(true);
  const [scrollHeight, setScrollHeight] = useState(
    document.documentElement.scrollTop
  );
  const [projects, setProjects] = useState(projectsData);
  const [modal, setModal] = useState(false);
  const [modalPictures, setModalPictures] = useState([]);

  // For Navbar
  useEffect(() => {
    window.addEventListener("scroll", () =>
      setScrollHeight(document.documentElement.scrollTop)
    );

    // default navbar close for mobile
    if (window.innerWidth < 1024) {
      window.onload = () => setShow(false);
    }
  }, []);

  // For opening modal link in portfolio
  const handleClick = (id) => {
    setProjects((oldProjects) =>
      oldProjects.map((project) => {
        return project.id === id
          ? { ...project, isButton: !project.isButton }
          : { ...project, isButton: false };
      })
    )
  };

  const handleClose = () => {
    setProjects((oldProjects) =>
      oldProjects.map((project) => {
        return { ...project, isButton: false };
      })
    );
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const pullProjectData = (data) => {
    setModalPictures(data.modalPictures);
  };

  console.log(modalPictures)

  return (
    <main>
      <GlobalStyles />
      {scrollHeight > 15 ? <Navbar show={show} setShow={setShow} /> : null}
      <Header windowHeight={scrollHeight} />
      <About />
      <Education />
      <Skills />
      <Portfolio
        handleClick={handleClick}
        handleClose={handleClose}
        projects={projects}
        handleModal={handleModal}
        modal={modal}
        pullProjectData={pullProjectData}
      />
      <Contact />
      {modal && (
        <WorkModal closeModal={handleModal} images={modalPictures} />
      )}
    </main>
  );
}

export default App;
