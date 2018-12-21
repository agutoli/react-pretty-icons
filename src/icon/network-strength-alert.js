import React from 'react';
import iconSvg from '../icons/normalized/network-strength-alert.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__network-strength-alert" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender