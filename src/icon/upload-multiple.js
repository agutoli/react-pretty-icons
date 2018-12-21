import React from 'react';
import iconSvg from '../icons/normalized/upload-multiple.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__upload-multiple" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender