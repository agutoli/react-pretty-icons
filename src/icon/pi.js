import React from 'react';
import iconSvg from '../icons/normalized/pi.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pi" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender