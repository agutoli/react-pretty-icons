import React from 'react';
import iconSvg from '../icons/normalized/cursor-pointer.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cursor-pointer" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender