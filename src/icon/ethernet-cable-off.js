import React from 'react';
import iconSvg from '../icons/normalized/ethernet-cable-off.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ethernet-cable-off" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender