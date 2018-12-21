import React from 'react';
import iconSvg from '../icons/normalized/file-powerpoint.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-powerpoint" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender