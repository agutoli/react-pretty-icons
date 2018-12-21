import React from 'react';
import iconSvg from '../icons/normalized/piston.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__piston" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender