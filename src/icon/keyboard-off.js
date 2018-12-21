import React from 'react';
import iconSvg from '../icons/normalized/keyboard-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__keyboard-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender