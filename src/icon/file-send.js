import React from 'react';
import iconSvg from '../icons/normalized/file-send.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-send" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender