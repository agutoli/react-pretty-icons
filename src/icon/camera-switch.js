import React from 'react';
import iconSvg from '../icons/normalized/camera-switch.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-switch" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender