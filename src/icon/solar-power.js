import React from 'react';
import iconSvg from '../icons/normalized/solar-power.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__solar-power" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender