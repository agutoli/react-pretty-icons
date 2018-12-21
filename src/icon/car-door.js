import React from 'react';
import iconSvg from '../icons/normalized/car-door.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__car-door" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender