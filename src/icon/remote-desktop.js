import React from 'react';
import iconSvg from '../icons/normalized/remote-desktop.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__remote-desktop" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender