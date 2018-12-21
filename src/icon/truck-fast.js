import React from 'react';
import iconSvg from '../icons/normalized/truck-fast.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__truck-fast" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender