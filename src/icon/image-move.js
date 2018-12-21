import React from 'react';
import iconSvg from '../icons/normalized/image-move.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__image-move" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender