import React from 'react';
import iconSvg from '../icons/normalized/file-pdf-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-pdf-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender