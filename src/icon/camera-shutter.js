import React from 'react';
import iconSvg from '../icons/normalized/camera-shutter.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-shutter" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender