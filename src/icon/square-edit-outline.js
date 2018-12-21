import React from 'react';
import iconSvg from '../icons/normalized/square-edit-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__square-edit-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender