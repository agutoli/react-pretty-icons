import React from 'react';
import iconSvg from '../icons/normalized/car-battery.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__car-battery" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender