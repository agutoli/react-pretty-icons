import React from 'react';
import iconSvg from '../icons/normalized/keyboard-settings.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__keyboard-settings" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender