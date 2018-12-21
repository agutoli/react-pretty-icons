import React from 'react';
import iconSvg from '../icons/normalized/blur-radial.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__blur-radial" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender