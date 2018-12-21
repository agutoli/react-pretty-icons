import React from 'react';
import iconSvg from '../icons/normalized/ship-wheel.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ship-wheel" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender