import React from 'react';
import iconSvg from '../icons/normalized/console-network.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__console-network" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender