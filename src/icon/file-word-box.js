import React from 'react';
import iconSvg from '../icons/normalized/file-word-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-word-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender