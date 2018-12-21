import React from 'react';
import iconSvg from '../icons/normalized/access-point.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__access-point" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender