import React from 'react';
import iconSvg from '../icons/normalized/ip-network.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ip-network" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender