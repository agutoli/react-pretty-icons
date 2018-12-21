import React from 'react';
import iconSvg from '../icons/normalized/power-socket-au.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__power-socket-au" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender