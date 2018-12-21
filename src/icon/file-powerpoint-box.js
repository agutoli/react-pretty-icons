import React from 'react';
import iconSvg from '../icons/normalized/file-powerpoint-box.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-powerpoint-box" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender