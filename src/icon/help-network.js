import React from 'react';
import iconSvg from '../icons/normalized/help-network.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__help-network" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender