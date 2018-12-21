import React from 'react';
import iconSvg from '../icons/normalized/folder-multiple-image.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folder-multiple-image" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender