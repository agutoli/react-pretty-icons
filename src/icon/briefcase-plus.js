import React from 'react';
import iconSvg from '../icons/normalized/briefcase-plus.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__briefcase-plus" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender