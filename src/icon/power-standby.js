import React from 'react';
import iconSvg from '../icons/normalized/power-standby.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__power-standby" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender