import React from 'react';
import iconSvg from '../icons/normalized/wifi-strength-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wifi-strength-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender