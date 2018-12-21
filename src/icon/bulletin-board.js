import React from 'react';
import iconSvg from '../icons/normalized/bulletin-board.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__bulletin-board" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender