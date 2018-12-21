import React from 'react';
import iconSvg from '../icons/normalized/tractor.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__tractor" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender