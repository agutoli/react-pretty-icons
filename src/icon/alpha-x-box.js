import React from 'react';
import iconSvg from '../icons/normalized/alpha-x-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-x-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender