import React from 'react';
import iconSvg from '../icons/normalized/window-minimize.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__window-minimize" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender