import React from 'react';
import iconSvg from '../icons/normalized/file-export.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-export" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender