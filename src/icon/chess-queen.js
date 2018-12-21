import React from 'react';
import iconSvg from '../icons/normalized/chess-queen.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chess-queen" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender