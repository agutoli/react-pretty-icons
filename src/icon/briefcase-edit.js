import React from 'react';
import iconSvg from '../icons/normalized/briefcase-edit.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__briefcase-edit" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender