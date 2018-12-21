import React from 'react';
import iconSvg from '../icons/normalized/file-replace-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-replace-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender