import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const HoverableLink = ({ children, hoverStyle, normalStyle, to }) => {

    const [hover, setHover] = useState(false);

    return (
        <Link 
            style={hover ? hoverStyle : normalStyle} 
            to={to}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
        >
            {children}
        </Link>
    )
}

export default HoverableLink