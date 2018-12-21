import React from 'react';
import iconSvg from '../icons/normalized/car-convertable.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__car-convertable" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender