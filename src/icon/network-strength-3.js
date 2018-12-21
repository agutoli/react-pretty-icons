import React from 'react';
import iconSvg from '../icons/normalized/network-strength-3.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__network-strength-3" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender