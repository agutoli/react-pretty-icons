import React from 'react';
import iconSvg from '../icons/normalized/apple-keyboard-shift.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__apple-keyboard-shift" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender