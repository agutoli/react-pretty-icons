import React from 'react';
import iconSvg from '../icons/normalized/cursor-move.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cursor-move" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender