import React, { useEffect } from 'react';
import { faHtml5, faReact, faCss3Alt, faJs, faNodeJs,faFreeCodeCamp, faNode, faJsSquare } from '@fortawesome/free-brands-svg-icons';
import { faGlobe, faCode, faFilm, faPaintBrush } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Slider = () => {
    const tagListItems = [
        { text: "HTML", bgColor: "#ffcccb", type: 'fab', icon: faHtml5 },
        { text: "React", bgColor: "#ffcccb", type: 'fab', icon: faReact },
        { text: "node js", bgColor: "#ffcccb", type: 'fab', icon: faNodeJs },
        { text: "CSS", bgColor: "#cbf5ff", type: 'fab', icon: faCss3Alt },
        { text: "JS", bgColor: "#d4ffb8", type: 'fab', icon: faJsSquare },
        { text: "JSX", bgColor: "#ffd8cb", type: 'fa', icon: faCode },
        { text: "webdev", bgColor: "#f7cbff", type: 'fa', icon: faGlobe },
        { text: "animation", bgColor: "#cbf5ff", type: 'fa', icon: faFilm },
        { text: "UI/UX", bgColor: "#d4ffb8", type: 'fa', icon: faPaintBrush },
    ];
    useEffect(() => {
        const scrollers = document.querySelectorAll(".scroller");
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
            addAnimation();
        }

        function addAnimation() {
            scrollers.forEach((scroller) => {
                scroller.setAttribute("data-animated", true);
                const scrollerInner = scroller.querySelector(".scroller__inner");
                const scrollerContent = Array.from(scrollerInner.children);
                scrollerContent.forEach((item) => {
                    const duplicatedItem = item.cloneNode(true);
                    duplicatedItem.setAttribute("aria-hidden", true);
                    scrollerInner.appendChild(duplicatedItem);
                });
            });
        }
    }, []);

    return (
        <div>
            <div className="scroller" data-speed="fast">
                <ul className="tag-list scroller__inner">
                    {tagListItems.map((item, index) => (
                        <li key={index}>
                            {item.icon && <FontAwesomeIcon icon={item.icon} className='fa'/>}
                            &nbsp;
                            &nbsp;
                            {item.text}
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    );
};

export default Slider;
