import React from 'react';
import iconSvg from '../icons/normalized/blur.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__blur" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender