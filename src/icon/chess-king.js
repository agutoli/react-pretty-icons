import React from 'react';
import iconSvg from '../icons/normalized/chess-king.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chess-king" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender