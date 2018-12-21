import React from 'react';
import iconSvg from '../icons/normalized/car-sports.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__car-sports" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender