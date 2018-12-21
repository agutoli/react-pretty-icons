import React from 'react';
import iconSvg from '../icons/normalized/gamepad.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gamepad" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender