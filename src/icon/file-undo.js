import React from 'react';
import iconSvg from '../icons/normalized/file-undo.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-undo" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender