import React from 'react';
import iconSvg from '../icons/normalized/pine-tree-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__pine-tree-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender