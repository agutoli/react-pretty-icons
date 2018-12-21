import React from 'react';
import iconSvg from '../icons/normalized/rotate-3d.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__rotate-3d" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender