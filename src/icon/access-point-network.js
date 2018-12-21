import React from 'react';
import iconSvg from '../icons/normalized/access-point-network.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__access-point-network" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender