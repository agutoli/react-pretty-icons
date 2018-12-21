import React from 'react';
import iconSvg from '../icons/normalized/keyboard-settings-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__keyboard-settings-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender