import React from 'react';
import iconSvg from '../icons/normalized/file-image.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-image" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender