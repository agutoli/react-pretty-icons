import React from 'react';
import iconSvg from '../icons/normalized/auto-upload.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__auto-upload" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender