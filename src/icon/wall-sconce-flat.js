import React from 'react';
import iconSvg from '../icons/normalized/wall-sconce-flat.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__wall-sconce-flat" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender