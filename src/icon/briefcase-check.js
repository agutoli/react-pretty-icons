import React from 'react';
import iconSvg from '../icons/normalized/briefcase-check.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__briefcase-check" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender