import React from 'react';
import iconSvg from '../icons/normalized/sim.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sim" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender