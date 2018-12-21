import React from 'react';
import iconSvg from '../icons/normalized/chess-bishop.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chess-bishop" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender