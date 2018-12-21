import React from 'react';
import iconSvg from '../icons/normalized/file-download-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-download-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender