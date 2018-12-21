import React from 'react';
import iconSvg from '../icons/normalized/alpha-s-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-s-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender