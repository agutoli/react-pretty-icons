import React from 'react';
import iconSvg from '../icons/normalized/window-closed.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__window-closed" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender