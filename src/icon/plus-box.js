import React from 'react';
import iconSvg from '../icons/normalized/plus-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__plus-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender