import React from 'react';
import iconSvg from '../icons/normalized/gamepad-variant.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gamepad-variant" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender