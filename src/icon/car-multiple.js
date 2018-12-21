import React from 'react';
import iconSvg from '../icons/normalized/car-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__car-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender