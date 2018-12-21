import React from 'react';
import iconSvg from '../icons/normalized/window-maximize.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__window-maximize" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender