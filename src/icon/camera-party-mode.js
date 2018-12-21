import React from 'react';
import iconSvg from '../icons/normalized/camera-party-mode.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-party-mode" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender