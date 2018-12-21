import React from 'react';
import iconSvg from '../icons/normalized/file-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender