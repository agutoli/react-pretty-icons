import React from 'react';
import iconSvg from '../icons/normalized/beats.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__beats" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender