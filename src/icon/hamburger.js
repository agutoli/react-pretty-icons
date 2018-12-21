import React from 'react';
import iconSvg from '../icons/normalized/hamburger.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__hamburger" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender