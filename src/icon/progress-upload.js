import React from 'react';
import iconSvg from '../icons/normalized/progress-upload.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__progress-upload" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender