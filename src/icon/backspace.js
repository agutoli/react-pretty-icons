import React from 'react';
import iconSvg from '../icons/normalized/backspace.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__backspace" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender