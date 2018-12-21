import React from 'react';
import iconSvg from '../icons/normalized/wifi-strength-4-lock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wifi-strength-4-lock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender