import React from 'react';
import iconSvg from '../icons/normalized/folder-remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folder-remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender