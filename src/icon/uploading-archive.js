import React from 'react';
import iconSvg from '../icons/normalized/uploading-archive.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__uploading-archive" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender