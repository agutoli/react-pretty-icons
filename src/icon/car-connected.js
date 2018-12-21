import React from 'react';
import iconSvg from '../icons/normalized/car-connected.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__car-connected" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender