import React from 'react';
import iconSvg from '../icons/normalized/album.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__album" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender