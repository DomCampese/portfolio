import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const HoverableLink = ({ children, style, hover, to }) => {

  const [hovering, setHovering] = useState(false);

  return (
    <Link 
      style={hovering ? {...style, ...hover} : style} 
      to={to}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      {children}
    </Link>
  )
}

export default HoverableLink