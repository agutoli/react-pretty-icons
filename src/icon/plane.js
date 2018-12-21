import React from 'react';
import iconSvg from '../icons/normalized/plane.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__plane" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender