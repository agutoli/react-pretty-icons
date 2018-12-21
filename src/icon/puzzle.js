import React from 'react';
import iconSvg from '../icons/normalized/puzzle.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__puzzle" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender