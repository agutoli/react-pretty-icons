import React from 'react';
import iconSvg from '../icons/normalized/vpn.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__vpn" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender