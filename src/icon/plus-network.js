import React from 'react';
import iconSvg from '../icons/normalized/plus-network.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__plus-network" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender