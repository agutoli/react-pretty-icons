import React from 'react';
import iconSvg from '../icons/normalized/power-cycle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__power-cycle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender