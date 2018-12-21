import React from 'react';
import iconSvg from '../icons/normalized/briefcase-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__briefcase-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender