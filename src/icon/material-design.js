import React from 'react';
import iconSvg from '../icons/normalized/material-design.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__material-design" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender