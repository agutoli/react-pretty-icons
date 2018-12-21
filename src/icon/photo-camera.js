import React from 'react';
import iconSvg from '../icons/normalized/photo-camera.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__photo-camera" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender