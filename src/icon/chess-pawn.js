import React from 'react';
import iconSvg from '../icons/normalized/chess-pawn.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chess-pawn" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender