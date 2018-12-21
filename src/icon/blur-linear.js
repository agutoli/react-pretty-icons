import React from 'react';
import iconSvg from '../icons/normalized/blur-linear.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__blur-linear" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender