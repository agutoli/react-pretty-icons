import React from 'react';
import iconSvg from '../icons/normalized/infinity.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__infinity" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender