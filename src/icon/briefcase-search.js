import React from 'react';
import iconSvg from '../icons/normalized/briefcase-search.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__briefcase-search" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender