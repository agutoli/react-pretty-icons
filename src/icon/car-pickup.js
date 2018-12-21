import React from 'react';
import iconSvg from '../icons/normalized/car-pickup.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__car-pickup" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender