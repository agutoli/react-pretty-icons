import React from 'react';
import iconSvg from '../icons/normalized/folder-search.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__folder-search" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender