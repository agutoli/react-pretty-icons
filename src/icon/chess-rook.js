import React from 'react';
import iconSvg from '../icons/normalized/chess-rook.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chess-rook" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender