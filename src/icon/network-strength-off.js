import React from 'react';
import iconSvg from '../icons/normalized/network-strength-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__network-strength-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender