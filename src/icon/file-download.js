import React from 'react';
import iconSvg from '../icons/normalized/file-download.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__file-download" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender