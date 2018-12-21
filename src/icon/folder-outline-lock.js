import React from 'react';
import iconSvg from '../icons/normalized/folder-outline-lock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folder-outline-lock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender