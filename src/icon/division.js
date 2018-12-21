import React from 'react';
import iconSvg from '../icons/normalized/division.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__division" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender