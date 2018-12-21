import React from 'react';
import iconSvg from '../icons/normalized/wifi-strength-1.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wifi-strength-1" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender