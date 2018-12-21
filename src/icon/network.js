import React from 'react';
import iconSvg from '../icons/normalized/network.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__network" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender