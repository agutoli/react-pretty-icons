import React from 'react';
import iconSvg from '../icons/normalized/cloud-upload.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__cloud-upload" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender