import React from 'react';
import iconSvg from '../icons/normalized/resistor-nodes.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__resistor-nodes" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender