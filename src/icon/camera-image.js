import React from 'react';
import iconSvg from '../icons/normalized/camera-image.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera-image" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender