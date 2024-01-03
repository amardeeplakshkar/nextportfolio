import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { faBolt, faEnvelope} from '@fortawesome/free-solid-svg-icons';

const ColorChangerButton = () => {
    const colors = ['#57c792', 'goldenrod', '#64c754',];
    const [currentColorIndex, setCurrentColorIndex] = useState(0);

    const handleButtonClick = () => {
        const updatedColorIndex = (currentColorIndex + 1) % colors.length;
        const updatedColor = colors[updatedColorIndex];
        document.documentElement.style.setProperty('--clr-theme', updatedColor);
        setCurrentColorIndex(updatedColorIndex);
    };
    return (
        <button className='social-btn social-ficon' onClick={handleButtonClick}>
            <FontAwesomeIcon icon={faBolt} className="social-icon fa-solid fa-bolt"/></button>
    );
};

export default ColorChangerButton;
