import React from 'react';
import iconSvg from '../icons/normalized/old-fashion-briefcase.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__old-fashion-briefcase" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender