import React from 'react';
import iconSvg from '../icons/normalized/ethernet-cable.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ethernet-cable" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender