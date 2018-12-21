import React from 'react';
import iconSvg from '../icons/normalized/cast-connected.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cast-connected" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender