import React from 'react';
import iconSvg from '../icons/normalized/dip-switch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__dip-switch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender