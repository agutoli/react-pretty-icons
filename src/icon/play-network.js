import React from 'react';
import iconSvg from '../icons/normalized/play-network.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__play-network" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender