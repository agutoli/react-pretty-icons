import React from 'react';
import iconSvg from '../icons/normalized/car-limousine.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__car-limousine" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender