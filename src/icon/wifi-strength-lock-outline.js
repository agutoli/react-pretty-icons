import React from 'react';
import iconSvg from '../icons/normalized/wifi-strength-lock-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wifi-strength-lock-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender