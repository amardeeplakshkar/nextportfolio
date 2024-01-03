import React from 'react'
import Slider from './Slider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp, faGlobe, faPalette } from '@fortawesome/free-solid-svg-icons';
import { faCss3Alt, faJs, faHtml5, faReact
 } from '@fortawesome/free-brands-svg-icons';

const Skills = () => {
  const skillsData = [
    { skillicontype: 'brands', skillicon: faReact, skillhead: 'React', skilldesc: 'React is the library for web and native user interfaces. Build user interfaces out of individual pieces called components written in JavaScript.' },
    { skillicontype: 'solid', skillicon: faPalette, skillhead: 'Responsive Web Design', skilldesc: 'Responsive web design ensures that websites I create adapt seamlessly to various screen sizes, providing an optimal viewing experience on all devices. ' },
    { skillicontype: 'brands', skillicon: faJs, skillhead: 'JavaScript', skilldesc: 'JavaScript is the backbone of dynamic web applications, allowing me to create interactive and responsive features that enhance user experiences. ' },
    { skillicontype: 'brands', skillicon: faHtml5, skillhead: 'HTML5', skilldesc: 'HTML5 is the foundation of modern web development, enabling me to structure and present content with semantic markup and multimedia support. ' },
    { skillicontype: 'brands', skillicon: faCss3Alt, skillhead: 'CSS3', skilldesc: 'CSS3 empowers me to style and design web elements beautifully, ensuring a visually appealing and consistent look across different devices. ' },
    { skillicontype: 'solid', skillicon: faGlobe, skillhead: 'Web Performance Optimization', skilldesc: 'Web performance optimization is my commitment to delivering fast and efficient websites by minimizing load times and enhancing overall user satisfaction. ' }
  ];

  const SkillBox = ({ skillhead, skilldesc, skillicon}) => (
    <div className="skill-box">
      <div className="fskill-box">
        <FontAwesomeIcon icon={skillicon} className='fa' />
      </div>
      <div className="sskill-box">
        <h3 className="skill-text">{skillhead}</h3>
        <div className="skill-desc">{skilldesc}</div>
      </div>
    </div>
  );

  const SkillsList = ({ skills }) => (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <SkillBox key={index} {...skill} />
      ))}
    </div>
  );

  return (
    <>
      <div id="skills"><h2 className="section-head">
        <FontAwesomeIcon icon={faAnglesUp} className="fa-solid fa-angles-up" /> &nbsp;
        Skills</h2>
        <h3 className='sub-head'>My Toolbox</h3>
        <div className="slider-pos">
          <Slider />
        </div>
        <SkillsList skills={skillsData} /></div>
    </>
  )
}

export default Skills