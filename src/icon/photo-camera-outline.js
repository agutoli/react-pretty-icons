import React from 'react';
import iconSvg from '../icons/normalized/photo-camera-outline.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__photo-camera-outline" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender