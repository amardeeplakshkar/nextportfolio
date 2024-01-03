import { useState } from 'react';
import { faAddressCard, faDownload, faHammer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import TextReveal from './textReveal';


const About = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
  return (
    <>
    
    <>

      <div className="container">
        <h2 id='about' className="section-head"><FontAwesomeIcon icon={faAddressCard} className="fa-solid" /> &nbsp;
          about me</h2>
        <div id="about-container">
          <div className="about-image"><img src="https://res.cloudinary.com/duscymcfc/image/upload/v1703950330/portfolio/pu7qn2rwgy9bc6bv7xot.png" alt="Amardeep Lakshkar" /></div>
          <div className="about-content">
            <h3>Full Stack MERN Web Developer</h3>
            <h4><TextReveal content={"Madhya Pradesh Based Full Stack Developer"}/></h4>
            <div className="main">
            <TextReveal content={"Passionate web developer from Mandsaur, Madhya Pradesh, specializing in crafting exceptional websites with a robust stack including JavaScript, HTML, CSS, React, Node.js, Express.js, and MongoDB, dedicated to creating visually appealing and seamlessly functional web experiences, with a keen interest in continuous learning and sharing insights through blogging."}/>
            {/* <p>
              Passionate web developer from Mandsaur, Madhya Pradesh, specializing in crafting exceptional websites with a robust stack including JavaScript, HTML, CSS, React, Node.js, Express.js, and MongoDB, dedicated to creating visually appealing and seamlessly functional web experiences, with a keen interest in continuous learning and sharing insights through blogging.
            </p> */}
            </div>
            <div className="btn-box ">
              <button onClick={openModal} className="download-btn">
                <FontAwesomeIcon icon={faDownload} className="fa-solid" /> Download CV
              </button>
              <button onClick={openModal} className="">
                <FontAwesomeIcon icon={faDownload} className="fa-solid" /> Hire Me
              </button>
            </div>
          </div>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>
                  &times;
                </span>
                <h4>
                  <FontAwesomeIcon icon={faHammer} className='fa-solid' /> &nbsp;
                  Under Development</h4>
                <p>Will Be Added Soon!.&#128531;</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
    </>
  )
}

export default About;
