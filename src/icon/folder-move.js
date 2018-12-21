import React from 'react';
import iconSvg from '../icons/normalized/folder-move.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folder-move" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender