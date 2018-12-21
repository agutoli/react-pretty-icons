import React from 'react';
import iconSvg from '../icons/normalized/briefcase-remove.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__briefcase-remove" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender