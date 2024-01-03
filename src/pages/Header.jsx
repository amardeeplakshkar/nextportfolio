import React from 'react'
import ColorChangerButton from './ColorChangerButton'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBolt, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { 
  faTwitter,
  faYoutube,
  faLinkedin,
  faInstagram, } from '@fortawesome/free-brands-svg-icons';

const Header = () => {
  const handleButtonClick = (url) => {
    window.open(url, '_blank');
  };
  return (
    <>
      <div className="container">
      <div className="social">
        <ColorChangerButton />
        <button onClick={() => handleButtonClick('https://twitter.com/amardeeplaksh04')} className="social-btn">
          <FontAwesomeIcon icon={faTwitter} className="social-icon fa-brands fa-twitter" />
        </button>
        <button onClick={() => handleButtonClick('https://instagram.com/amardeep_lakshkar')} className="social-btn">
          <FontAwesomeIcon icon={faInstagram} className="social-icon fa-brands fa-instagram" />
        </button>
        <button onClick={() => handleButtonClick('https://in.linkedin.com/in/amardeep-lakshkar-24a339244')} className="social-btn">
          <FontAwesomeIcon icon={faLinkedin} className="social-icon fa-brands fa-linkedin" />
        </button>
        <button onClick={() => handleButtonClick('https://youtube.com/@AmardeepLakshkar')} className="social-btn">
          <FontAwesomeIcon icon={faYoutube} className="social-icon fa-brands fa-youtube" />
        </button>
        <button onClick={() => handleButtonClick('mailto:lakshkaramardeep@gmail.com')} className="social-btn">
          <FontAwesomeIcon icon={faEnvelope} className="social-icon fa-solid fa-envelope" />
        </button>
      </div>
      <header>
        <div className='header'>
          <a dir="rtl" href="#home" className="navlinks">Home</a>
          <a dir="rtl" href="#about" className="navlinks">About</a>
          <a dir="rtl" href="#skills" className="navlinks">Skils</a>
          <a dir="rtl" href="#projects" className="navlinks">Projects</a>
          <a dir="rtl" href="#contact" className="navlinks">Contact</a>
        </div>
      </header>
      </div>
    </>
  )
}

export default Header
