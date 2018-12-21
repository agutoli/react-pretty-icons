import React from 'react';
import iconSvg from '../icons/normalized/file-lock.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-lock" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender