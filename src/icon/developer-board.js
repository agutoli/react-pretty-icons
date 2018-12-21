import React from 'react';
import iconSvg from '../icons/normalized/developer-board.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__developer-board" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender