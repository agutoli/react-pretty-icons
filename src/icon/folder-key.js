import React from 'react';
import iconSvg from '../icons/normalized/folder-key.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folder-key" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender