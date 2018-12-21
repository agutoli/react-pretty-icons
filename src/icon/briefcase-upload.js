import React from 'react';
import iconSvg from '../icons/normalized/briefcase-upload.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__briefcase-upload" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender