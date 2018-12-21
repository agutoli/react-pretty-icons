import React from 'react';
import iconSvg from '../icons/normalized/car-side.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__car-side" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender