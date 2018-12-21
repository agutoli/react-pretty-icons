import React from 'react';
import iconSvg from '../icons/normalized/keyboard-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__keyboard-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender