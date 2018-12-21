import React from 'react';
import iconSvg from '../icons/normalized/alpha-z-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-z-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender