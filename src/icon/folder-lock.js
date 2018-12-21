import React from 'react';
import iconSvg from '../icons/normalized/folder-lock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folder-lock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender