import React from 'react';
import iconSvg from '../icons/normalized/satellite.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__satellite" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender