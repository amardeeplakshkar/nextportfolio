import { faGit, faGithub, faInstagram, faLinkedin, faTelegram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faContactBook, faMailBulk, faMapLocation, faPaperPlane, faPhoneAlt, faPlane, } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const Contact = () => {
    const handleButtonClick = (url) => {
        window.open(url, '_blank');
    };
    return (
        <div className='container'>

                <div id="contact">
                    <h2 className="section-head">
                        <FontAwesomeIcon icon={faContactBook} className='fa-solid' /> &nbsp;
                        Contact Me</h2>
                    <h3 className="sub-head">Details</h3>
                </div>
            <div className="contact-container">
                <div className="contact-wrapper">
                    <div className="wrapper1">
                        <input type="text" placeholder='NAME' />
                        <input type="text" placeholder='EMAIL' />
                        <input type="text" placeholder='MESSAGE' />
                        <button className="send-btn">
                            <FontAwesomeIcon icon={faPaperPlane} />
                            <span className='btn-cta'>Send</span>
                        </button>
                    </div>
                    <div className="wrapper2">
                        <p className="contact-details">
                            <FontAwesomeIcon icon={faMapLocation} />&nbsp;&nbsp;
                            Mandsaur, Madhya Pradesh
                        </p>
                        <p className="contact-details">
                            <FontAwesomeIcon icon={faPhoneAlt} />&nbsp;&nbsp;
                            +91 6265733147
                        </p>
                        <p className="contact-details">
                            <FontAwesomeIcon icon={faMailBulk} />&nbsp;&nbsp;
                            lakshkaramardeep@gmail.com

                        </p>
                        <hr />
                        <div className="contact-social-container">
                            <FontAwesomeIcon onClick={() => handleButtonClick('https://twitter.com/amardeeplaksh04')} icon={faTwitter}></FontAwesomeIcon>
                            <FontAwesomeIcon onClick={() => handleButtonClick('https://github.com/amardeeplakshkar')} icon={faGithub}></FontAwesomeIcon>
                            <FontAwesomeIcon onClick={() => handleButtonClick('https://instagram.com/amardeep_lakshkar')} icon={faInstagram}></FontAwesomeIcon>
                            <FontAwesomeIcon onClick={() => handleButtonClick('https://in.linkedin.com/in/amardeep-lakshkar-24a339244')} icon={faLinkedin}></FontAwesomeIcon>
                        </div>
                        <hr />
                        <p>&copy; ALL OF THE RIGHTS RESERVED</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact