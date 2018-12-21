import React from 'react';
import iconSvg from '../icons/normalized/folder-upload.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folder-upload" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender