import React from 'react';
import iconSvg from '../icons/normalized/edge.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__edge" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender