import React from 'react';
import iconSvg from '../icons/normalized/alpha-d-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__alpha-d-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender