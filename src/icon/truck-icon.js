import React from 'react';
import iconSvg from '../icons/normalized/truck-icon.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__truck-icon" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender