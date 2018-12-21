import React from 'react';
import iconSvg from '../icons/normalized/power-socket-us.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__power-socket-us" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender