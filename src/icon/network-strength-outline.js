import React from 'react';
import iconSvg from '../icons/normalized/network-strength-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__network-strength-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender