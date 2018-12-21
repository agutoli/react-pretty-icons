import React from 'react';
import iconSvg from '../icons/normalized/minus-network.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__minus-network" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender