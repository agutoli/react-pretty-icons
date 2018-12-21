import React from 'react';
import iconSvg from '../icons/normalized/keyboard-backspace.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__keyboard-backspace" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender