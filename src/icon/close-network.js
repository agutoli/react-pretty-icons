import React from 'react';
import iconSvg from '../icons/normalized/close-network.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__close-network" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender