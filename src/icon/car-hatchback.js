import React from 'react';
import iconSvg from '../icons/normalized/car-hatchback.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__car-hatchback" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender