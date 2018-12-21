import React from 'react';
import iconSvg from '../icons/normalized/briefcase.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__briefcase" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender