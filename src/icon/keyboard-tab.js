import React from 'react';
import iconSvg from '../icons/normalized/keyboard-tab.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__keyboard-tab" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender