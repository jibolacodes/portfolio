import React, { useState, useEffect } from "react";
import { GlobalStyles } from "./GlobalStyles";

// Components
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Education from "./components/Education";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Comments from "./components/Comments";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WorkModal from "./components/WorkModal";
import ScrollUpButton from "./components/ScrollUpButton";

// Data
import { projectsData , schoolsData, jobsData, testimonials } from "./data";

function App() {
  const [show, setShow] = useState(true);
  const [scrollHeight, setScrollHeight] = useState(
    document.documentElement.scrollTop
  );
  const [projects, setProjects] = useState(projectsData);
  const [modal, setModal] = useState(false);
  const [modalPictures, setModalPictures] = useState([]);
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    subject: "",
    message: "",
  });
  
  useEffect(() => {
    const scrollPage = () =>
      setScrollHeight(document.documentElement.scrollTop);

    window.addEventListener("scroll", scrollPage);

    // default navbar close for mobile
    if (window.innerWidth < 1024) {
      window.onload = () => setShow(false);
    }

    // cleanup scroll
    return () => window.removeEventListener("scroll", scrollPage);
  }, []);




  // For opening modal link in portfolio
  const handleClick = (id) => {
    setProjects((oldProjects) =>
      oldProjects.map((project) => {
        return project.id === id
          ? { ...project, isButton: !project.isButton }
          : { ...project, isButton: false };
      })
    );
  };

  // Close Workbutton
  const handleClose = () => {
    setProjects((oldProjects) =>
      oldProjects.map((project) => {
        return { ...project, isButton: false };
      })
    );
  };

  // Close WorkModal
  const handleModal = () => {
    setModal(!modal);
  };

  // Pull data from Work
  const pullProjectData = (data) => {
    setModalPictures(data.modalPictures);
  };

  // Pull data from Form inputs
  const handleChange = (event) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [event.target.name]: event.target.value,
    }));
    console.log(formData);
  };

  // Submit Form
  const handleSubmit = (event) => {
    event.preventDefault();

    setFormData((prevFormData) => (
      {
        firstname: "",
        lastname: "",
        email: "",
        subject: "",
        message: "",
      }
    ))
  };

  return (
    <main>
      <GlobalStyles />
      {scrollHeight > 15 ? <Navbar show={show} setShow={setShow} /> : null}
      <Header windowHeight={scrollHeight} />
      <About />
      <Education schools={schoolsData} jobs={jobsData}/>
      <Skills />
      <Portfolio
        handleClick={handleClick}
        handleClose={handleClose}
        projects={projects}
        handleModal={handleModal}
        modal={modal}
        pullProjectData={pullProjectData}
      />
      <Comments testimonials={testimonials}/>
      <Contact
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
      />
      <Footer />
      {modal && <WorkModal closeModal={handleModal} images={modalPictures} />}
      {scrollHeight > 800 && <ScrollUpButton />}
    </main>
  );
}

export default App;
