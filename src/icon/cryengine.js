import React from 'react';
import iconSvg from '../icons/normalized/cryengine.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cryengine" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender