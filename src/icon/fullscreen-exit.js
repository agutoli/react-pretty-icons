import React from 'react';
import iconSvg from '../icons/normalized/fullscreen-exit.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__fullscreen-exit" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender