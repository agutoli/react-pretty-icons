import React from 'react';
import iconSvg from '../icons/normalized/file-upload-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-upload-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender