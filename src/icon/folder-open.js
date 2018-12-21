import React from 'react';
import iconSvg from '../icons/normalized/folder-open.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folder-open" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender