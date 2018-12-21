import React from 'react';
import iconSvg from '../icons/normalized/drag-horizontal.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__drag-horizontal" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender