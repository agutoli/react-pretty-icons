import React from 'react';
import iconSvg from '../icons/normalized/drag-vertical.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__drag-vertical" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender