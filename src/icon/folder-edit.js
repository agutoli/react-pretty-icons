import React from 'react';
import iconSvg from '../icons/normalized/folder-edit.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folder-edit" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender