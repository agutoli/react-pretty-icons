import React from 'react';
import iconSvg from '../icons/normalized/apple-keyboard-option.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__apple-keyboard-option" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender