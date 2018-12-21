import React from 'react';
import iconSvg from '../icons/normalized/filmstrip.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__filmstrip" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender