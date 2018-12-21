import React from 'react';
import iconSvg from '../icons/normalized/move-resize.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__move-resize" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender