import React from 'react';
import iconSvg from '../icons/normalized/video-camera.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__video-camera" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender