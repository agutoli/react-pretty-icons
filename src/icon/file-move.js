import React from 'react';
import iconSvg from '../icons/normalized/file-move.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-move" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender