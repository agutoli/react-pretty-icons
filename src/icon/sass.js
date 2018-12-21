import React from 'react';
import iconSvg from '../icons/normalized/sass.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__sass" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender