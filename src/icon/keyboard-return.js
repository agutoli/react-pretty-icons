import React from 'react';
import iconSvg from '../icons/normalized/keyboard-return.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__keyboard-return" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender