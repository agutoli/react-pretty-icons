import React from 'react';
import iconSvg from '../icons/normalized/texture.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__texture" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender