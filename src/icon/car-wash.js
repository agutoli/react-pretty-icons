import React from 'react';
import iconSvg from '../icons/normalized/car-wash.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__car-wash" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender