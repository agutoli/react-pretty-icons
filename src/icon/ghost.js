import React from 'react';
import iconSvg from '../icons/normalized/ghost.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__ghost" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender