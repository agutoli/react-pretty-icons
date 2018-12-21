import React from 'react';
import iconSvg from '../icons/normalized/camera.svg';

function IconRender() {
  return (
    <i className="react-pretty-icons react-pretty-icons__camera" dangerouslySetInnerHTML={{ __html: iconSvg }} />
  )
}
export default IconRender