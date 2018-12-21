import React from 'react';
import iconSvg from '../icons/normalized/chess-knight.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__chess-knight" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender