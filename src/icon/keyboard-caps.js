import React from 'react';
import iconSvg from '../icons/normalized/keyboard-caps.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__keyboard-caps" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender