import React from 'react';
import iconSvg from '../icons/normalized/power-socket-eu.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__power-socket-eu" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender