import React from 'react';
import iconSvg from '../icons/normalized/window-close.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__window-close" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender