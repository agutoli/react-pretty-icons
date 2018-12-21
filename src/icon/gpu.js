import React from 'react';
import iconSvg from '../icons/normalized/gpu.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__gpu" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender