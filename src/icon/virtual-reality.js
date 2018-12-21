import React from 'react';
import iconSvg from '../icons/normalized/virtual-reality.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__virtual-reality" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender