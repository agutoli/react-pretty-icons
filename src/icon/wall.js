import React from 'react';
import iconSvg from '../icons/normalized/wall.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wall" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender