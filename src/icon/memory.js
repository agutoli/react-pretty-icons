import React from 'react';
import iconSvg from '../icons/normalized/memory.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__memory" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender