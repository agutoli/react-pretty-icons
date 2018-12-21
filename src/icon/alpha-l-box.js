import React from 'react';
import iconSvg from '../icons/normalized/alpha-l-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-l-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender