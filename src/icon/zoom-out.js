import React from 'react';
import iconSvg from '../icons/normalized/zoom-out.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__zoom-out" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender