import React from 'react';
import iconSvg from '../icons/normalized/file-tree.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-tree" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender